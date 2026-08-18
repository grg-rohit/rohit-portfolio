import { useMemo } from "react";
import { Vector3 } from "three";
import { Line } from "@react-three/drei";
import { getOrbitPosition, type OrbitConfig } from "./backendSkills";

const SEGMENTS = 96;

type OrbitProps = {
  orbit: OrbitConfig;
};

export const Orbit = ({ orbit }: OrbitProps) => {
  const points = useMemo(() => {
    const pts: Vector3[] = [];
    for (let i = 0; i <= SEGMENTS; i++) {
      const angle = (i / SEGMENTS) * Math.PI * 2;
      pts.push(getOrbitPosition(orbit, angle));
    }
    return pts;
  }, [orbit]);

  return <Line points={points} color="#8b95a3" transparent opacity={0.25} lineWidth={1} />;
};
