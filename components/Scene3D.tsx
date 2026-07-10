"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const reduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Tooth({ position = [0, 0, 0], scale = 1 }: { position?: [number, number, number]; scale?: number }) {
  // Incisor profile revolved around Y — reads clearly as a single-root tooth.
  const profile = useMemo(
    () =>
      [
        [0.04, -1.25],
        [0.2, -0.75],
        [0.19, -0.2],
        [0.25, 0.15],
        [0.4, 0.5],
        [0.41, 0.85],
        [0.22, 0.98],
        [0.0, 1.02],
      ].map(([x, y]) => new THREE.Vector2(x, y)),
    []
  );

  return (
    <group position={position} scale={scale} rotation={[0.18, 0, 0.05]}>
      <mesh castShadow>
        <latheGeometry args={[profile, 80]} />
        <meshPhysicalMaterial
          color="#fbfbf8"
          roughness={0.22}
          clearcoat={1}
          clearcoatRoughness={0.14}
          sheen={0.6}
          sheenColor="#cfe6ff"
        />
      </mesh>
      {/* gum context */}
      <mesh position={[0, -1.18, 0]} scale={[0.52, 0.26, 0.52]}>
        <sphereGeometry args={[1, 40, 32]} />
        <meshStandardMaterial color="#ff9aa6" roughness={0.7} />
      </mesh>
    </group>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current && !reduced) group.current.rotation.y += delta * 0.3;
  });

  return (
    <group ref={group}>
      <Tooth position={[0, 0, 0]} scale={1} />
      <Tooth position={[1.35, -0.35, -0.6]} scale={0.42} />
      <Tooth position={[-1.25, -0.55, -0.4]} scale={0.34} />
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[3, 6, 4]} intensity={1.4} />
      <pointLight position={[-4, -1, 2]} intensity={2.2} color="#ffd0d6" />
      <pointLight position={[4, 2, 3]} intensity={1.4} color="#bcd8f5" />
      <Float
        speed={reduced ? 0 : 1.2}
        rotationIntensity={reduced ? 0 : 0.3}
        floatIntensity={reduced ? 0 : 0.8}
      >
        <Scene />
      </Float>
    </Canvas>
  );
}
