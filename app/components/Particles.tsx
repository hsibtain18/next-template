 
'use client';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import { useTheme } from 'next-themes';

 
const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme(); // light | dark

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(() => {
    const isDark = resolvedTheme === "dark";

    return {
      background: {
        color: {
          value: isDark ? "#000000" : "#ffffff", // transparent dark bg or white bg
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: {
          value: isDark ? "#ffffff" : "#000000", // white in dark, black in light
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 130,
        },
        opacity: { value: 0.2 },
        shape: { type: "circle" },
        size: { value: { min: 0.5, max: 4 } },
      },
      detectRetina: true,
    };
  }, [resolvedTheme]);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className={`absolute top-0 left-0 w-full h-screen`}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return null;
};

export default ParticlesComponent;
