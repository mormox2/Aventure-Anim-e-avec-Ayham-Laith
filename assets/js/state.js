/* Shared application state. These classic-script bindings preserve legacy callback compatibility. */
            /************************************************************
             * 3. State Variables
             ************************************************************/
            let canvas, ctx;
            let isDrawing = false;
            let lastX = 0;
            let lastY = 0;
            let activeColor = "#FF4D6D"; // Default is pinkish red
            let isRainbowBrush = false;
            let rainbowHue = 0;
            let brushSize = 12;
            let isEraser = false;
            let isSprayMode = false;  // Spray paint mode
            let isFillMode = false;   // Fill Bucket mode
            let isMirrorMode = false; // Mirror mode
            let activeStamp = null;   // Active stamp to place
            let currentBg = "white"; // Canvas background

            // Undo & Redo Stacks (store Blob URLs — async, no UI freeze)
            let undoStack = [];
            let redoStack = [];

            // Stickers placement state
            let stickerIdCounter = 0;
            let activeSticker = null;
            let isAlive = false;
            let currentTheme = "day"; // 'day' or 'night'
            let isSplitMode = false;  // Duo split canvas mode
            let particles = [];       // Float particles list
            let particlesCanvas, particlesCtx;

            // Sticker interaction variables
            let isDragging = false;
            let isResizing = false;
            let isRotating = false;

            let initialPointerX = 0;
            let initialPointerY = 0;
            let stickerStartLeft = 0;
            let stickerStartTop = 0;
            let stickerStartWidth = 100;
            let stickerStartHeight = 100;
            let stickerStartAngle = 0;
            let stickerStartScale = 1;
            let stickerCenter = { x: 0, y: 0 };

