
"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

// Unsere rotierende Chromskulptur.
function ChromeSculpture() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Animation der Skulptur.
  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Gleichmäßige Rotation.
    meshRef.current.rotation.y += delta * 0.12;

    // Reaktion auf die Mausbewegung.
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      state.pointer.y * 0.15,
      0.025
    );

    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      -state.pointer.x * 0.15,
      0.025
    );
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.15}
      floatIntensity={0.35}
    >
      <mesh ref={meshRef} scale={1.15}>
        {/* Geschwungene 3D-Geometrie */}
        <torusKnotGeometry args={[1, 0.32, 256, 32, 2, 3]} />

        {/* Hochglänzende Chromoberfläche */}
        <meshPhysicalMaterial
          color="#DDE2E8"
          metalness={1}
          roughness={0.08}
          envMapIntensity={2.5}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>
    </Float>
  );
}

// Gesamte 3D-Szene.
export default function LiquidChrome() {
  return (
    <div className="relative h-[420px] w-full md:h-[650px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          {/* Grundbeleuchtung */}
          <ambientLight intensity={0.8} />

          {/* Weißes Hauptlicht */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={3}
            color="#FFFFFF"
          />

          {/* Grünes Akzentlicht */}
          <pointLight
            position={[-3, 2, 3]}
            intensity={40}
            color="#C7FF32"
          />

          {/* Zusätzliches Licht */}
          <pointLight
            position={[3, -3, -2]}
            intensity={25}
            color="#FFFFFF"
          />

          {/* Umgebung für Chromreflexionen */}
          <Environment preset="city" />

          <ChromeSculpture />
        </Suspense>
      </Canvas>
    </div>
  );
}
