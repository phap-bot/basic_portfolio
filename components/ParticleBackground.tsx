
import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: { x: number; y: number; speed: number; size: number; opacity: number }[] = [];
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            const particleCount = Math.floor(window.innerWidth / 10); // Responsive count
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    speed: Math.random() * 1.5 + 0.5,
                    size: Math.random() * 2 + 0.5,
                    opacity: Math.random() * 0.5 + 0.1
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                ctx.beginPath();
                // Cyan/White glow style
                ctx.fillStyle = `rgba(34, 211, 238, ${p.opacity})`; // Cyan-400
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Update position (Falling down)
                p.y += p.speed;

                // Reset if off screen
                if (p.y > canvas.height) {
                    particles[i] = {
                        x: Math.random() * canvas.width,
                        y: -10, // Start slightly above
                        speed: Math.random() * 1.5 + 0.5,
                        size: Math.random() * 2 + 0.5,
                        opacity: Math.random() * 0.5 + 0.1
                    };
                }
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        window.addEventListener('resize', () => {
            resizeCanvas();
            createParticles();
        });

        resizeCanvas();
        createParticles();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-60"
        />
    );
};

export default ParticleBackground;
