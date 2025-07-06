"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.6,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.3, 0.6, 1],
  markerColor: [0.1, 1, 0.1],
  glowColor: [0.3, 0.6, 1],
  markers: [
   // Asia
  { location: [14.5995, 120.9842], size: 0.03 },  // Manila
  { location: [19.076, 72.8777], size: 0.1 },     // Mumbai
  { location: [23.8103, 90.4125], size: 0.05 },   // Dhaka
  { location: [30.0444, 31.2357], size: 0.07 },   // Cairo
  { location: [39.9042, 116.4074], size: 0.08 },  // Beijing
  { location: [34.0522, 135.7681], size: 0.06 },  // Kyoto
  { location: [35.6895, 139.6917], size: 0.07 },  // Tokyo
  { location: [1.3521, 103.8198], size: 0.05 },   // Singapore
  { location: [3.139, 101.6869], size: 0.04 },    // Kuala Lumpur
  { location: [31.2304, 121.4737], size: 0.06 },  // Shanghai
  { location: [13.7563, 100.5018], size: 0.05 },  // Bangkok
  { location: [41.0082, 28.9784], size: 0.06 },   // Istanbul
  { location: [21.0285, 105.8542], size: 0.05 },  // Hanoi
  { location: [24.7136, 46.6753], size: 0.05 },   // Riyadh
  { location: [35.6892, 51.389], size: 0.05 },    // Tehran
  { location: [25.2048, 55.2708], size: 0.06 },   // Dubai
  { location: [33.6844, 73.0479], size: 0.05 },   // Islamabad
  { location: [31.5497, 74.3436], size: 0.05 },   // Lahore
  { location: [37.5665, 126.978], size: 0.06 },   // Seoul
  { location: [34.6937, 135.5022], size: 0.05 },  // Osaka

  // Europe
  { location: [51.5074, -0.1278], size: 0.07 },   // London
  { location: [48.8566, 2.3522], size: 0.06 },    // Paris
  { location: [52.52, 13.4050], size: 0.06 },     // Berlin
  { location: [55.7558, 37.6173], size: 0.08 },   // Moscow
  { location: [41.9028, 12.4964], size: 0.06 },   // Rome
  { location: [40.4168, -3.7038], size: 0.06 },   // Madrid
  { location: [50.0755, 14.4378], size: 0.05 },   // Prague
  { location: [59.3293, 18.0686], size: 0.05 },   // Stockholm
  { location: [60.1699, 24.9384], size: 0.05 },   // Helsinki

  // Americas
  { location: [40.7128, -74.006], size: 0.1 },    // New York
  { location: [37.7749, -122.4194], size: 0.06 }, // San Francisco
  { location: [19.4326, -99.1332], size: 0.1 },   // Mexico City
  { location: [-23.5505, -46.6333], size: 0.1 },  // São Paulo
  { location: [45.4215, -75.6972], size: 0.05 },  // Ottawa
  { location: [34.0522, -118.2437], size: 0.08 }, // Los Angeles
  { location: [43.65107, -79.347015], size: 0.06 }, // Toronto
  { location: [10.4806, -66.9036], size: 0.05 },  // Caracas

  // Africa
  { location: [-1.2921, 36.8219], size: 0.06 },   // Nairobi
  { location: [-26.2041, 28.0473], size: 0.07 },  // Johannesburg
  { location: [6.5244, 3.3792], size: 0.07 },     // Lagos
  { location: [9.0579, 38.7613], size: 0.05 },    // Addis Ababa

  // Oceania
  { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney
  { location: [-36.8485, 174.7633], size: 0.05 }, // Auckland
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
