import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Nucleus } from "./Nucleus";
import { Orbit } from "./Orbit";
import { Electron } from "./Electron";
import { orbits, electronAssignments, type BackendSkill } from "./backendSkills";

type AtomSceneProps = {
  motionFactor: number;
  allowDrag: boolean;
  selected: BackendSkill | null;
  onSelect: (skill: BackendSkill) => void;
};

export const AtomScene = ({ motionFactor, allowDrag, selected, onSelect }: AtomSceneProps) => {
  // Lifted up (rather than local to each Electron) so hovering one electron can also
  // pause the camera's auto-rotate — otherwise the camera can carry the target out
  // from under the cursor between mousedown and mouseup, and the click never lands.
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 3]} intensity={0.9} />
      <pointLight position={[-4, -3, -2]} intensity={0.25} color="#8b95a3" />

      <Nucleus spinSpeed={0.12 * motionFactor} />

      {orbits.map((orbit, i) => (
        <Orbit key={i} orbit={orbit} />
      ))}

      {electronAssignments.map(({ skill, orbitIndex, baseAngle, speed }) => (
        <Electron
          key={skill.name}
          skill={skill}
          orbit={orbits[orbitIndex]}
          baseAngle={baseAngle}
          speed={speed}
          motionFactor={motionFactor}
          isSelected={selected?.name === skill.name}
          isHovered={hovered === skill.name}
          onHoverChange={(isHovered) => setHovered(isHovered ? skill.name : null)}
          onSelect={onSelect}
        />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={allowDrag}
        autoRotate={!hovered}
        autoRotateSpeed={0.35 * motionFactor}
        minPolarAngle={Math.PI / 2 - 0.6}
        maxPolarAngle={Math.PI / 2 + 0.6}
        dampingFactor={0.08}
      />
    </>
  );
};
