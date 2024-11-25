'use client';

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ParticleAnimationProps {
  particleCount?: number; // Number of particles
  particleSize?: number; // Size of each particle
  particleSpeed?: number; // Speed of particle movement
}

const ParticleAnimation: React.FC<ParticleAnimationProps> = ({
  particleCount = 35,
  particleSize = 2,
  particleSpeed = 1.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: {
      x: number;
      y: number;
      color: string;
      update: () => void;
      draw: () => void;
    }[] = [];

    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = Math.random() > 0.5 ? "white" : "#232d6b";
        particles.push({
          x,
          y,
          color,
          update: function () {
            this.y -= particleSpeed;
            if (this.y < 0) {
              this.y = canvas.height;
              this.x = Math.random() * canvas.width;
            }
          },
          draw: function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, particleSize, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
          },
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [particleCount, particleSize, particleSpeed]);

  return (
    <div className="w-full px-20 absolute pb-28 top-0 left-0 bottom-0">
    <motion.div
      ref={containerRef}
      style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </motion.div>
    </div>
  );
};

export default ParticleAnimation;
