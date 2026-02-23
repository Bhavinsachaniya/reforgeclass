"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface HeroImageSequenceProps {
    mode?: "scroll" | "autoplay";
    totalFrames?: number;
}

export default function HeroImageSequence({
    mode = "scroll",
    totalFrames = 224,
}: HeroImageSequenceProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // State to hold the preloaded Image objects
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    // Current frame index (0 to totalFrames - 1)
    const currentFrameRef = useRef(0);
    // Optional: keep track of loading progress (0 to 1) for a loader, omitted here for seamless entry
    const [loaded, setLoaded] = useState(false);

    // Framer Motion scroll logic for "scroll" mode
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // The sequence plays out fully between the top and the end of this large container
        offset: ["start start", "end end"]
    });

    // Pure White Background for Clean Industrial Look
    const backgroundColor = "#ffffff";

    // Dynamic Glow Opacity: Increases as the building becomes "solid"
    const glowOpacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 0.9],
        [0, 0.1, 0.15, 0]
    );

    // Lens Flare / Light shift logic
    const lightX = useTransform(scrollYProgress, [0, 1], ["35%", "65%"]);

    // Transparent Blend for White Background
    const blendColor = "rgba(255,255,255,0)";

    // Preload images on mount
    useEffect(() => {
        let isCancelled = false;

        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 1; i <= totalFrames; i++) {
                const img = new Image();
                const src = `/images/hero/${i}.webp`;
                promises.push(
                    new Promise((resolve) => {
                        img.onload = () => {
                            loadedImages[i - 1] = img;
                            resolve();
                        };
                        img.onerror = () => {
                            // Graceful degradation: if a frame is missing, just use an empty slot or previous
                            console.warn(`Failed to load frame ${i}`);
                            resolve();
                        };
                        img.src = src;
                    })
                );
            }

            await Promise.all(promises);
            if (!isCancelled) {
                setImages(loadedImages);
                setLoaded(true);
                // Draw the very first frame immediately once loaded
                renderFrame(0, loadedImages);
            }
        };

        loadImages();
        return () => {
            isCancelled = true;
        };
    }, [totalFrames]);

    // Handle resizing for crisp rendering (retina support) & letterbox containment
    const renderFrame = (frameIndex: number, imgArray: HTMLImageElement[] = images) => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imgArray[frameIndex];
        if (!img) return;

        // Handle high DPI displays
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        // Only update logical size if it changed to avoid layout thrashing
        if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        }

        // Clear previous draw
        ctx.clearRect(0, 0, rect.width, rect.height);

        const canvasRatio = rect.width / rect.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        // STRICT Width-Based Scaling
        // The image is always 100% of the screen width
        drawWidth = rect.width;
        drawHeight = img.height * (rect.width / img.width);

        // Center vertically but lock horizontally to 0
        offsetX = 0;
        offsetY = (rect.height - drawHeight) / 2;

        // Smooth images
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Re-render on window resize
    useEffect(() => {
        if (!loaded) return;
        const handleResize = () => renderFrame(currentFrameRef.current);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [loaded, images]);

    // Mode A: Scroll-based animation
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (mode !== "scroll" || !loaded) return;
        // Map scroll 0-1 to frame 0-(totalFrames-1)
        let frameRaw = Math.floor(latest * (totalFrames - 1));
        frameRaw = Math.max(0, Math.min(totalFrames - 1, frameRaw));

        if (frameRaw !== currentFrameRef.current) {
            currentFrameRef.current = frameRaw;
            requestAnimationFrame(() => renderFrame(frameRaw));
        }
    });

    // Mode B: Auto-play loop animation
    useEffect(() => {
        if (mode !== "autoplay" || !loaded) return;
        let animationId: number;
        let lastTime = performance.now();
        const targetFPS = 24;
        const interval = 1000 / targetFPS;

        const playLoop = (time: number) => {
            const elapsed = time - lastTime;
            if (elapsed > interval) {
                lastTime = time - (elapsed % interval);
                currentFrameRef.current = (currentFrameRef.current + 1) % totalFrames;
                renderFrame(currentFrameRef.current);
            }
            animationId = requestAnimationFrame(playLoop);
        };

        animationId = requestAnimationFrame(playLoop);
        return () => cancelAnimationFrame(animationId);
    }, [mode, loaded, totalFrames]);

    // We set a large height (e.g., 400vh) to allow scrolling for the sequence,
    // but stick the canvas so it remains in view while scrolling down.
    const containerHeight = mode === "scroll" ? "400vh" : "100vh";

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[400vh]"
        >
            <motion.div
                style={{ backgroundColor }}
                className="sticky top-0 w-full h-screen overflow-hidden transition-colors duration-700"
            >
                {/* Dynamic Atmospheric Glow */}
                <motion.div
                    style={{
                        opacity: glowOpacity,
                        left: lightX,
                        background: "radial-gradient(circle, rgba(255,77,0,0.08) 0%, rgba(255,255,255,0) 70%)"
                    }}
                    className="absolute top-1/2 -translate-y-1/2 w-[80vw] h-[80vw] pointer-events-none z-0"
                />

                <canvas
                    ref={canvasRef}
                    className="w-full h-full block relative z-10"
                    style={{
                        /* Smooth transitions to prevent hard black before load */
                        opacity: loaded ? 1 : 0,
                        transition: "opacity 1.5s ease-in-out",
                        filter: "contrast(1.02) saturate(1.05)", // Subtle boost for architectural punch
                    }}
                />

                {/* Atmospheric Fog - Blends the canvas edges into the white background */}
                <div className="absolute inset-0 pointer-events-none z-15 shadow-[inset_0_0_150px_rgba(255,255,255,1)]" />

                {/* ADVANCED SEAMLESS BLEND: Transitions from studio gray to section white */}
                <div
                    className="absolute inset-x-0 bottom-0 h-40 z-20 pointer-events-none bg-gradient-to-t from-white to-transparent"
                />
            </motion.div>
        </div>
    );
}
