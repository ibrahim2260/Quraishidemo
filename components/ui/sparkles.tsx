"use client";
import React, { useId } from "react";
import Particles from "@tsparticles/react";
import { ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import type { Engine, SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

// Initialize once — loadSlim is idempotent so multiple calls are safe
const initEngine = async (engine: Engine) => {
  await loadSlim(engine);
};

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

function SparklesInner(props: ParticlesProps) {
  const { id, className, background, minSize, maxSize, speed, particleColor, particleDensity } = props;
  const { loaded } = useParticlesProvider();
  const controls = useAnimation();
  const generatedId = useId();

  const particlesLoaded = async () => {
    controls.start({ opacity: 1, transition: { duration: 1 } });
  };

  if (!loaded) return null;

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      <Particles
        id={id || generatedId}
        className="h-full w-full"
        particlesLoaded={particlesLoaded}
        options={{
          background: { color: { value: background || "transparent" } },
          fullScreen: { enable: false, zIndex: 1 },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: false, mode: "repulse" },
              resize: true as any,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: particleColor || "#B8944A" },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "out" },
              random: false,
              speed: { min: 0.1, max: speed || 1 },
              straight: false,
            },
            number: {
              density: { enable: true, width: 400, height: 400 },
              value: particleDensity || 80,
            },
            opacity: {
              value: { min: 0.1, max: 0.8 },
              animation: {
                enable: true,
                speed: speed || 3,
                sync: false,
              },
            },
            size: {
              value: { min: minSize || 0.5, max: maxSize || 2 },
            },
            shape: { type: "circle" },
          },
          detectRetina: true,
        }}
      />
    </motion.div>
  );
}

export const SparklesCore = (props: ParticlesProps) => {
  return (
    <ParticlesProvider init={initEngine}>
      <SparklesInner {...props} />
    </ParticlesProvider>
  );
};
