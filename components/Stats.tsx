
import React, { useEffect, useState, useRef } from 'react';

interface StatItemProps {
    label: string;
    value: number;
    suffix?: string;
    icon: string;
}

const Counter: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }
        observerRef.current = observer;

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth deceleration
            const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

            setCount(Math.floor(easeOutQuart(percentage) * end));

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [hasStarted, end, duration]);

    return <span ref={countRef}>{count.toLocaleString()}</span>;
};

const Stats: React.FC = () => {
    const stats: StatItemProps[] = [
        { label: "Profile Visits", value: 12543, icon: "fa-eye", suffix: "+" },
        { label: "Projects Done", value: 24, icon: "fa-code-branch", suffix: "" },
        { label: "Years Exp", value: 3, icon: "fa-calendar-check", suffix: "+" },
        { label: "Connections", value: 150, icon: "fa-user-group", suffix: "+" },
    ];

    return (
        <section className="py-10 relative z-10 -mt-10 mb-10">
            <div className="container mx-auto px-6">
                <div className="glass-card p-8 rounded-[2rem] border border-white/5 bg-slate-900/60 shadow-2xl relative overflow-hidden">
                    {/* Decorative sheen */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center text-center group">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 text-xl mb-4 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                                    <i className={`fa-solid ${stat.icon}`}></i>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black heading-font text-white mb-1 tracking-tight">
                                    <Counter end={stat.value} />{stat.suffix}
                                </h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
