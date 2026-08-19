import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import type { Group } from "three";

const CLUSTER_SPHERES = [
  { position: [0, 0, 0] as const, radius: 0.42, color: "#f5f7fa", emissive: "#8b95a3" },
  { position: [0.28, 0.16, 0.08] as const, radius: 0.26, color: "#c7ced8", emissive: "#6b7480" },
  { position: [-0.26, -0.14, 0.14] as const, radius: 0.24, color: "#aeb6c2", emissive: "#5c6470" },
  { position: [0.05, -0.26, -0.2] as const, radius: 0.22, color: "#c7ced8", emissive: "#6b7480" },
  { position: [-0.15, 0.22, -0.18] as const, radius: 0.2, color: "#aeb6c2", emissive: "#5c6470" },
];

type NucleusProps = {
  spinSpeed: number;
};

export const Nucleus = ({ spinSpeed }: NucleusProps) => {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * spinSpeed;
  });

  return (
    <group ref={group}>
      {CLUSTER_SPHERES.map((s, i) => (
        <mesh key={i} position={s.position}>
          <sphereGeometry args={[s.radius, 20, 20]} />
          <meshStandardMaterial
            color={s.color}
            emissive={s.emissive}
            emissiveIntensity={0.35}
            roughness={0.35}
            metalness={0.4}
          />
        </mesh>
      ))}
      <Html center distanceFactor={8} style={{ pointerEvents: "none" }}>
        <span className="whitespace-nowrap rounded-sm border border-white/15 bg-black/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
          Backend
        </span>
      </Html>
    </group>
  );
};
