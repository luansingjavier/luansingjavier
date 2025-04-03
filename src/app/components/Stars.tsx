"use client";

import React, { useEffect, useRef } from "react";

const Stars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars(); // Recreate stars on resize
    };

    // Star Wars colors - mostly white with hints of blue
    const starColors = [
      "rgba(255, 255, 255, 1)", // White
      "rgba(240, 240, 255, 1)", // Slight blue tint
      "rgba(220, 225, 255, 1)", // More blue tint
      "rgba(230, 230, 255, 1)", // Soft blue
    ];

    // Create stars array first before using it in createStars function
    const stars: {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleDirection: boolean;
      color: string;
    }[] = [];

    function createStars() {
      stars.length = 0; // Clear existing stars
      // Using non-null assertion since we've already checked canvas exists
      const starCount = Math.floor((canvas!.width * canvas!.height) / 1200); // Higher density

      for (let i = 0; i < starCount; i++) {
        // Create varying star sizes with some larger ones
        const sizeMultiplier = Math.random() < 0.1 ? 2 : 1; // 10% chance of larger stars
        const baseSize = Math.random() * 1.5 + 0.5;

        stars.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          size: baseSize * sizeMultiplier,
          speed: Math.random() * 0.05 + 0.005, // Slower for more realistic space feel
          opacity: Math.random() * 0.5 + 0.5, // Random initial opacity
          twinkleSpeed: Math.random() * 0.03 + 0.005, // How fast the star twinkles
          twinkleDirection: Math.random() > 0.5, // Whether opacity is increasing or decreasing
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    // Animation loop
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Draw stars
      stars.forEach((star) => {
        // Create twinkling effect by changing opacity
        if (star.twinkleDirection) {
          star.opacity += star.twinkleSpeed;
          if (star.opacity >= 1) {
            star.twinkleDirection = false;
          }
        } else {
          star.opacity -= star.twinkleSpeed;
          if (star.opacity <= 0.2) {
            star.twinkleDirection = true;
          }
        }

        // Create star glow effect for larger stars
        if (star.size > 1.5) {
          const gradient = ctx!.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.size * 2
          );
          gradient.addColorStop(
            0,
            star.color.replace("1)", `${star.opacity})`)
          );
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx!.fillStyle = gradient;
          ctx!.beginPath();
          ctx!.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx!.fill();
        }

        // Draw the star
        ctx!.fillStyle = star.color.replace("1)", `${star.opacity})`);
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx!.fill();

        // Move stars slightly for subtle parallax effect
        star.y += star.speed;

        // Reset star position if it goes out of view
        if (star.y > canvas!.height) {
          star.y = 0;
          star.x = Math.random() * canvas!.width;
          // Randomize properties for new stars
          star.opacity = Math.random() * 0.5 + 0.5;
          star.twinkleDirection = Math.random() > 0.5;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
        background: "linear-gradient(to bottom, #000000, #050510)",
      }}
    />
  );
};

export default Stars;
