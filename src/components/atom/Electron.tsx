import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { MathUtils, type Group, type Mesh } from "three";
import { getOrbitPosition, type BackendSkill, type OrbitConfig } from "./backendSkills";

type ElectronProps = {
  skill: BackendSkill;
  orbit: OrbitConfig;
  baseAngle: number;
  speed: number;
  motionFactor: number;
  isSelected: boolean;
  isHovered: boolean;
  onHoverChange: (hovered: boolean) => void;
  onSelect: (skill: BackendSkill) => void;
};

export const Electron = ({
  skill,
  orbit,
  baseAngle,
  speed,
  motionFactor,
  isSelected,
  isHovered,
  onHoverChange,
  onSelect,
}: ElectronProps) => {
  const group = useRef<Group>(null);
  const mesh = useRef<Mesh>(null);
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    // Freeze in place while hovered — a moving target is nearly impossible to click
    // reliably, since it can drift out from under the cursor between mousedown/up.
    if (!isHovered) {
      elapsed.current += delta * motionFactor;
    }
    const angle = baseAngle + elapsed.current * speed;
    const pos = getOrbitPosition(orbit, angle);
    group.current?.position.copy(pos);

    const targetScale = isHovered || isSelected ? 1.6 : 1;
    if (mesh.current) {
      mesh.current.scale.setScalar(MathUtils.lerp(mesh.current.scale.x, targetScale, 0.15));
    }
  });

  const active = isHovered || isSelected;

  return (
    <group ref={group}>
      {/* Invisible, larger hit-area — the visible sphere below is too small to be a
          comfortable mouse/touch target on its own, so this is what actually catches events. */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          onHoverChange(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHoverChange(false);
          document.body.style.cursor = "auto";
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(skill);
        }}
      >
        <sphereGeometry args={[0.3, 12, 12]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      <mesh ref={mesh}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial
          color={active ? "#39e58f" : "#e2e8f0"}
          emissive={active ? "#39e58f" : "#3a4048"}
          emissiveIntensity={active ? 0.9 : 0.4}
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
      <Html
        center
        distanceFactor={8}
        style={{ pointerEvents: "none", transition: "opacity 0.2s ease" }}
      >
        <span
          className={`whitespace-nowrap rounded-sm border px-1.5 py-0.5 text-[9px] uppercase tracking-[0.12em] backdrop-blur-sm transition-colors ${
            active
              ? "border-primary/40 bg-black/50 text-primary"
              : "border-white/10 bg-black/30 text-muted-foreground"
          }`}
        >
          {skill.name}
        </span>
      </Html>
    </group>
  );
};
