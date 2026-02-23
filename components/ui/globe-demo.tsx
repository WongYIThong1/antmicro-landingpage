"use client";

import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border border-white/20 border-t-white/90" />
    </div>
  ),
});

type GlobeDemoProps = {
  lowPowerMode?: boolean;
};

export function GlobeDemo({ lowPowerMode = false }: GlobeDemoProps) {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#0a0a0a",
    showAtmosphere: true,
    atmosphereColor: "#ffffff",
    atmosphereAltitude: 0.12,
    emissive: "#0a0a0a",
    emissiveIntensity: 0.18,
    shininess: 0.95,
    polygonColor: "rgba(255,255,255,0.75)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: lowPowerMode ? 2200 : 1000,
    arcLength: lowPowerMode ? 0.55 : 0.9,
    rings: lowPowerMode ? 0 : 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: !lowPowerMode,
    autoRotateSpeed: lowPowerMode ? 0 : 0.5,
  };

  const colors = ["#ffffff", "#e4e4e7", "#a1a1aa"];
  const fullArcs = [
    {
      order: 1,
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.25,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 40.7128,
      startLng: -74.006,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.35,
      color: colors[1],
    },
    {
      order: 3,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.22,
      color: colors[2],
    },
    {
      order: 4,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.28,
      color: colors[0],
    },
    {
      order: 5,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 6,
      startLat: -23.5505,
      startLng: -46.6333,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[2],
    },
  ];

  const sampleArcs = lowPowerMode ? [] : fullArcs;

  return (
    <div className="relative min-h-[360px] w-full overflow-visible bg-transparent">
      <div className="relative h-[360px] w-full sm:h-[420px] lg:h-[460px]">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}
