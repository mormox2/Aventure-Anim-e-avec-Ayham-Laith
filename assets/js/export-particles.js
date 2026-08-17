/* PNG export and pointer particle effects. */
            /************************************************************
             * 13. Export Composite Drawing (Canvas + Stickers) as PNG
             ************************************************************/
            function saveDrawing() {
                deselectAllStickers(); // Clear outlines for final save
                synth.playTada();
                showEncouragement("جاري تحضير صورتك الجميلة... ⏱️✨");

                const exportCanvas = document.createElement("canvas");
                const exportCtx = exportCanvas.getContext("2d");

                // Use layout width & height to stay immune to active CSS transforms
                const layoutW = canvas.offsetWidth || 700;
                const layoutH = canvas.offsetHeight || 480;
                const dpr = window.devicePixelRatio || 1;
                exportCanvas.width = layoutW * dpr;
                exportCanvas.height = layoutH * dpr;
                // Scale the export context so we can use logical coords
                exportCtx.scale(dpr, dpr);

                // 1. Draw Background
                if (currentTheme === "day") {
                    // Light sky gradient
                    const grad = exportCtx.createLinearGradient(0, 0, 0, layoutH);
                    grad.addColorStop(0, "#e0f2fe");
                    grad.addColorStop(1, "#bae6fd");
                    exportCtx.fillStyle = grad;
                } else {
                    // Dark Indigo
                    const grad = exportCtx.createLinearGradient(0, 0, 0, layoutH);
                    grad.addColorStop(0, "#0f172a");
                    grad.addColorStop(1, "#1e1b4b");
                    exportCtx.fillStyle = grad;
                }
                exportCtx.fillRect(0, 0, layoutW, layoutH);

                // 2. Draw Main Canvas Painting (source canvas is at DPR resolution, scale to logical)
                // Source: 0,0 to canvas.width,canvas.height (native px) -> Dest: 0,0 to layoutW,layoutH (logical px)
                exportCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, layoutW, layoutH);

                // 3. Serialize and Draw All Placed Stickers
                const stickers = Array.from(document.querySelectorAll(".sticker-element"));
                const loadPromises = stickers.map((sticker) => {
                    const svgElement = sticker.querySelector("svg");
                    if (!svgElement) return Promise.resolve(null);
                    const left = parseFloat(sticker.style.left) || 0;
                    const top = parseFloat(sticker.style.top) || 0;
                    const width = parseFloat(sticker.style.width) || 100;
                    const height = parseFloat(sticker.style.height) || 100;
                    const angle = parseFloat(sticker.dataset.angle) || 0;
                    const scale = parseFloat(sticker.dataset.scale) || 1;

                    // Convert SVG to dataURL
                    const svgString = new XMLSerializer().serializeToString(svgElement);
                    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
                    const url = URL.createObjectURL(svgBlob);

                    return new Promise((resolve) => {
                        const img = new Image();
                        img.onload = () => {
                            resolve({ img, left, top, width, height, angle, scale, url });
                        };
                        img.onerror = () => {
                            resolve(null);
                        };
                        img.src = url;
                    });
                });

                Promise.all(loadPromises).then((stickerDataArray) => {
                    stickerDataArray.forEach((data) => {
                        if (!data) return;

                        exportCtx.save();

                        // Translate to center of the sticker to apply rotation and scale
                        const centerX = data.left + data.width / 2;
                        const centerY = data.top + data.height / 2;

                        exportCtx.translate(centerX, centerY);
                        exportCtx.rotate((data.angle * Math.PI) / 180);
                        exportCtx.scale(data.scale, data.scale);

                        // Draw image centered on translation point
                        exportCtx.drawImage(data.img, -data.width / 2, -data.height / 2, data.width, data.height);

                        exportCtx.restore();

                        // Free URL resources
                        URL.revokeObjectURL(data.url);
                    });

                    // 4. Trigger file download
                    try {
                        const link = document.createElement("a");
                        link.download = `ارسم_وحرّك_${Date.now()}.png`;
                        link.href = exportCanvas.toDataURL("image/png");
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);

                        // Save a thumbnail to gallery automatically
                        saveCurrentDrawingToGallery();

                        triggerConfetti();
                        showEncouragement("رائع! تم تحميل الرسمة بنجاح 🎉📥");
                    } catch (err) {
                        console.error(err);
                        alert("حدث خطأ ما أثناء حفظ الصورة. حاول مرة أخرى!");
                    }
                });
            }

            /************************************************************
             * 15. Magic Particle Trail System ⭐🫧
             ************************************************************/
            function initParticles() {
                particlesCanvas = document.getElementById("particles-canvas");
                if (!particlesCanvas) return;
                particlesCtx = particlesCanvas.getContext("2d");
                resizeParticlesCanvas();
                window.addEventListener("resize", resizeParticlesCanvas);
                requestAnimationFrame(updateParticles);
            }

            function resizeParticlesCanvas() {
                if (!particlesCanvas || !canvas) return;
                const dpr = window.devicePixelRatio || 1;
                particlesCanvas.width = canvas.width;
                particlesCanvas.height = canvas.height;
                particlesCtx.scale(dpr, dpr);
            }

            function spawnParticles(x, y) {
                if (!particlesCanvas) return;
                let col = activeColor;
                if (isRainbowBrush) {
                    col = `hsl(${rainbowHue}, 100%, 55%)`;
                } else if (isEraser) {
                    col = "#E2E8F0"; // Cute chalky/pastel bubbles for eraser
                }

                // Spawn 2 particles at pointer coordinates
                for (let i = 0; i < 2; i++) {
                    particles.push({
                        x: x,
                        y: y,
                        vx: (Math.random() - 0.5) * 2.0,
                        vy: -Math.random() * 1.5 - 0.5, // Float upwards
                        size: Math.random() * 9 + 4,
                        color: col,
                        life: 1.0,
                        decay: Math.random() * 0.02 + 0.015, // Fades in ~800ms
                        type: Math.random() < 0.5 ? 'star' : 'bubble',
                        rotation: Math.random() * Math.PI * 2,
                        rotSpeed: (Math.random() - 0.5) * 0.1
                    });
                }
            }

            function updateParticles() {
                if (!particlesCanvas || !particlesCtx) {
                    requestAnimationFrame(updateParticles);
                    return;
                }

                const dpr = window.devicePixelRatio || 1;
                const layoutW = particlesCanvas.width / dpr;
                const layoutH = particlesCanvas.height / dpr;

                particlesCtx.clearRect(0, 0, layoutW, layoutH);

                for (let i = particles.length - 1; i >= 0; i--) {
                    const p = particles[i];
                    p.x += p.vx;
                    p.y += p.vy;
                    p.rotation += p.rotSpeed;
                    p.life -= p.decay;

                    if (p.life <= 0) {
                        particles.splice(i, 1);
                        continue;
                    }

                    particlesCtx.save();
                    particlesCtx.globalAlpha = p.life;
                    particlesCtx.fillStyle = p.color;
                    particlesCtx.strokeStyle = p.color;
                    particlesCtx.lineWidth = 1.8;

                    if (p.type === 'star') {
                        drawStar(particlesCtx, p.x, p.y, 5, p.size, p.size / 2.2, p.rotation);
                    } else {
                        // Draw outline bubble
                        particlesCtx.beginPath();
                        particlesCtx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
                        particlesCtx.stroke();
                        // Inner reflection dot
                        particlesCtx.fillStyle = "rgba(255, 255, 255, 0.7)";
                        particlesCtx.beginPath();
                        particlesCtx.arc(p.x - p.size / 5, p.y - p.size / 5, p.size / 8, 0, Math.PI * 2);
                        particlesCtx.fill();
                    }

                    particlesCtx.restore();
                }

                requestAnimationFrame(updateParticles);
            }

            function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, rotation = 0) {
                let rot = (Math.PI / 2) * 3;
                let x = cx;
                let y = cy;
                const step = Math.PI / spikes;

                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(rotation);
                ctx.beginPath();
                ctx.moveTo(0, -outerRadius);

                for (let i = 0; i < spikes; i++) {
                    let lx = Math.cos(rot) * outerRadius;
                    let ly = Math.sin(rot) * outerRadius;
                    ctx.lineTo(lx, ly);
                    rot += step;

                    lx = Math.cos(rot) * innerRadius;
                    ly = Math.sin(rot) * innerRadius;
                    ctx.lineTo(lx, ly);
                    rot += step;
                }
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }



/* ESM exports */
export { saveDrawing, initParticles, resizeParticlesCanvas, spawnParticles, updateParticles, drawStar };
