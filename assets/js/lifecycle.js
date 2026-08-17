/* DOM lifecycle, canvas sizing and application bootstrap. */
            /************************************************************
             * 4. Initializer / Lifecycle
             ************************************************************/
            window.addEventListener("DOMContentLoaded", () => {
                canvas = document.getElementById("drawing-canvas");
                ctx = canvas.getContext("2d");

                // Set Canvas Resolution (supports high DPI/retina displays)
                setupCanvasDimensions();

                // Render color buttons
                renderColors();
                renderMobileColors(); // populate mobile drawer palette too

                // Render stickers gallery
                renderStickers("all");

                // Add Canvas drawing event listeners (Pointer Events)
                canvas.addEventListener("pointerdown", startDrawing);
                canvas.addEventListener("pointermove", draw);
                // #2: save state on pointerup (end of stroke) — not on pointerdown
                window.addEventListener("pointerup", (e) => {
                    stopDrawing();
                    if (isDrawing === false && !isFillMode && !activeStamp) {
                        // stroke just finished — save undo state
                        saveState();
                    }
                });
                canvas.addEventListener("pointerleave", () => {
                    if (isDrawing) {
                        isDrawing = false;
                        ctx.globalCompositeOperation = "source-over";
                        saveState();
                    }
                });

                // Brush slider updates
                const sizeSlider = document.getElementById("brush-size");
                sizeSlider.addEventListener("input", (e) => {
                    brushSize = parseInt(e.target.value);
                    document.getElementById("brush-size-val").textContent = brushSize;
                    document.getElementById("brush-preview").style.width = `${brushSize}px`;
                    document.getElementById("brush-preview").style.height = `${brushSize}px`;
                    // Keep mobile slider in sync
                    const mbs = document.getElementById("mobile-brush-size");
                    if (mbs) mbs.value = brushSize;
                });

                // Clear any active sticker if clicked elsewhere
                window.addEventListener("pointerdown", (e) => {
                    const clickedSticker = e.target.closest(".sticker-element");
                    const clickedControl = e.target.closest("button");
                    if (!clickedSticker && !clickedControl) {
                        deselectAllStickers();
                    }
                });

                // #4: debounced resize handler
                window.addEventListener("resize", handleWindowResize);

                // Save initial canvas state (blank canvas)
                saveState();

                // Initialize default speed button highlight
                setTimeout(() => {
                    setAnimationSpeed(1);
                }, 100);

                // Sparkly confetti on startup to cheer up kids
                setTimeout(() => {
                    triggerConfetti();
                }, 500);

                // Personal welcome message for the kids
                setTimeout(() => {
                    showEncouragement("أهلاً أيهم و ليث! 🎨✨ هيا نبدأ مغامرة الرسم الممتعة!");
                }, 1200);

                // Render guest badges from localStorage
                renderFriendBadges();

                // #5: Global keyboard shortcuts
                window.addEventListener("keydown", (e) => {
                    if (e.ctrlKey && e.key === "z") { e.preventDefault(); undo(); }
                    if (e.ctrlKey && e.key === "y") { e.preventDefault(); redo(); }
                    if (e.ctrlKey && e.shiftKey && e.key === "Z") { e.preventDefault(); redo(); }
                    if (e.key === "Escape") {
                        deselectAllStickers();
                        activeStamp = null;
                        // close any open modal
                        ["stamps-modal","gallery-modal","friends-modal","hero-modal","help-modal"].forEach(id => {
                            const el = document.getElementById(id);
                            if (el && !el.classList.contains("hidden")) {
                                el.classList.add("opacity-0");
                                setTimeout(() => el.classList.add("hidden"), 300);
                            }
                        });
                        // close mobile drawer
                        const drawer = document.getElementById("mobile-drawer");
                        if (drawer && !drawer.classList.contains("hidden")) toggleMobileDrawer();
                    }
                });

                // #9: Auto-save every 30 seconds
                setInterval(() => {
                    if (undoStack.length > 1) {
                        saveCurrentDrawingToGallery();
                    }
                }, 30000);

                // Initialize particle trail system
                initParticles();
            });


            // Helper to dynamically adjust canvas size to its CSS dimensions without losing drawing
            let canvasInitialized = false;
            function setupCanvasDimensions() {
                // Use offsetWidth/Height to get the true layout size ignoring any active CSS transforms
                const layoutW = canvas.offsetWidth || 700;
                const layoutH = canvas.offsetHeight || 480;

                // Save canvas state first (only if canvas was already initialized)
                let tempDataUrl = null;
                if (canvasInitialized) {
                    try {
                        tempDataUrl = canvas.toDataURL();
                    } catch (err) {}
                }

                // Set canvas width & height matching layout size multiplied by devicePixelRatio (crisp drawing)
                const dpr = window.devicePixelRatio || 1;
                canvas.width = layoutW * dpr;
                canvas.height = layoutH * dpr;

                // Reset the transform matrix before applying DPR scaling
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.scale(dpr, dpr);

                canvasInitialized = true;

                // Restore drawing content if we had any
                if (tempDataUrl) {
                    const tempImage = new Image();
                    tempImage.onload = () => {
                        ctx.clearRect(0, 0, layoutW, layoutH);
                        ctx.drawImage(tempImage, 0, 0, layoutW, layoutH);
                    };
                    tempImage.src = tempDataUrl;
                }
            }

            // #4: Debounced resize — avoids calling expensive setupCanvasDimensions on every pixel
            let _resizeTimer;
            function handleWindowResize() {
                clearTimeout(_resizeTimer);
                _resizeTimer = setTimeout(setupCanvasDimensions, 200);
            }



/* ESM exports */
export { setupCanvasDimensions, handleWindowResize };
