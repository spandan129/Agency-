"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
  value: number;
  label: string;
  suffix: string;
}

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
}

interface AnimationTimestamp {
  timestamp: number;
}

const Counter: React.FC<CounterProps> = ({ from, to, duration = 2 }) => {
  const [count, setCount] = useState<number>(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number | null = null;
      let animationFrame: number;
      
      const animate = (timestamp: number): void => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
          setHasAnimated(true);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [from, to, duration, isInView, hasAnimated]);

  return (
    <motion.span
      ref={ref}
      className="inline-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {count}
    </motion.span>
  );
};

const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    { value: 100, label: "Successful Placements", suffix: "K+" },
    { value: 50, label: "Partner Companies", suffix: "+" },
    { value: 95, label: "Satisfaction Rate", suffix: "%" },
    { value: 15, label: "Years Experience", suffix: "+" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-purple-50 via-white to-pink-50 text-[#3a1041] font-luxora">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-6xl font-bold mb-2">
                <Counter from={0} to={stat.value} />
                <span>{stat.suffix}</span>
              </h4>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;