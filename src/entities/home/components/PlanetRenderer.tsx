"use client";

import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import WorldEarthPlanet from "./WorldEarthPlanet";

useGLTF.preload("./scene.gltf");

const PlanetRenderer = () => {
  return (
<div className="relative">
  <div className="absolute left-16 bottom-[200px]">
    <h2 className="text-8xl font-bold">You travel the world</h2>
    <h2 className="text-7xl text-gray-500">We provide <span className="text-blue-500 underline">everything!</span></h2>
  </div>
<Canvas
      className="canvas w-full"
      style={{ height: "100vh", width: "100vw",  }} 
    >
      <PerspectiveCamera position={[0, 0, 6]} makeDefault fov={10} />
      <ambientLight color="white" intensity={2.5} />
      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={5}
        enableRotate={false}
        enableZoom={false}
      />

      <Suspense fallback={null}>
        <WorldEarthPlanet  />
      </Suspense>
    </Canvas>
</div>
  );
};

export default PlanetRenderer;
