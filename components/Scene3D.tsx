"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const reduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Pearl() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current && !reduced) group.current.rotation.y += delta * 0.25;
  });

  const orbit = [
    { a: 0, c: "#12a594", s: 0.26 },
    { a: Math.PI * 0.66, c: "#f3b6a6", s: 0.2 },
    { a: Math.PI * 1.33, c: "#8fded3", s: 0.22 },
    { a: Math.PI * 1.9, c: "#d8b06a", s: 0.16 },
  ];

  return (
    <group ref={group}>
      <mesh castShadow>
        <sphereGeometry args={[1.15, 64, 64]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.12}
          sheen={0.6}
          sheenColor="#8fded3"
        />
      </mesh>
      {orbit.map((o, i) => (
        <mesh key={i} position={[Math.cos(o.a) * 2.05, Math.sin(o.a) * 0.9, Math.sin(o.a) * 2.05]}>
          <sphereGeometry args={[o.s, 32, 32]} />
          <meshStandardMaterial color={o.c} roughness={0.35} metalness={0.1} emissive={o.c} emissiveIntensity={0.25} />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[2.35, 0.012, 12, 140]} />
        <meshBasicMaterial color="#12a594" wireframe />
      </mesh>
    </group>
  );
}

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(420 * 3);
    for (let i = 0; i < 420; i++) {
      const r = 4.2 + Math.random() * 4;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, []);
  useFrame((_, delta) => {
    if (ref.current && !reduced) ref.current.rotation.y += delta * 0.03;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#8fded3" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 4]} intensity={1.3} />
      <pointLight position={[-4, -2, -3]} intensity={2.2} color="#f3b6a6" />
      <pointLight position={[4, 2, 3]} intensity={1.6} color="#12a594" />
      <Float
        speed={reduced ? 0 : 1.3}
        rotationIntensity={reduced ? 0 : 0.4}
        floatIntensity={reduced ? 0 : 0.9}
      >
        <Pearl />
      </Float>
      <Stars />
    </Canvas>
  );
}
