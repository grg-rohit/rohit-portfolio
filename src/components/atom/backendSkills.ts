import { Vector3 } from "three";

const X_AXIS = new Vector3(1, 0, 0);
const Y_AXIS = new Vector3(0, 1, 0);

export type BackendSkill = {
  name: string;
  description: string;
};

// Curated from the real stack listed in the Stack section — not a duplicate list,
// just the subset that reads well as 8 electrons across 3 orbits.
export const backendSkills: BackendSkill[] = [
  { name: "Python", description: "Primary language for backend services, scripting and automation." },
  { name: "FastAPI", description: "Async REST APIs, authentication and background task endpoints." },
  { name: "PostgreSQL", description: "Relational schema design, migrations and query optimization." },
  { name: "Redis", description: "Caching, background job queues and realtime state." },
  { name: "Docker", description: "Containerized services for consistent local and production environments." },
  { name: "Celery", description: "Background task processing and scheduled jobs." },
  { name: "Stripe", description: "Subscription billing, booking payments and webhook verification." },
  { name: "GraphQL", description: "Flexible query APIs alongside REST for CRM workflows." },
];

export type OrbitConfig = {
  radius: number;
  tiltX: number;
  rotY: number;
};

// A single shared ring shape (same radius, same tilt), rotated 120° apart around
// the vertical axis — true 3-fold symmetry, the way a real atom-icon is built,
// rather than three differently-shaped ellipses that only look atom-like by coincidence.
const ORBIT_RADIUS = 2.5;
const ORBIT_TILT_X = 1.15;

export const orbits: OrbitConfig[] = [0, 1, 2].map((i) => ({
  radius: ORBIT_RADIUS,
  tiltX: ORBIT_TILT_X,
  rotY: (i * Math.PI * 2) / 3,
}));

// Every electron on the same orbit shares that orbit's speed, so their angular spacing
// is constant forever — they can never catch up to and overlap one another. Different
// orbits (and directions) get different speeds purely for visual variety.
const ORBIT_SPEEDS = [0.16, -0.22, 0.19];

// Distribute the 8 skills across the 3 orbits (3/3/2), evenly spaced within each orbit
// so siblings on the same ring start — and stay — equidistant from each other.
export const electronAssignments = backendSkills.map((skill, i) => {
  const orbitIndex = i % orbits.length;
  const siblingsInOrbit = backendSkills.filter((_, j) => j % orbits.length === orbitIndex).length;
  const indexInOrbit = Math.floor(i / orbits.length);
  return {
    skill,
    orbitIndex,
    baseAngle: (indexInOrbit / siblingsInOrbit) * Math.PI * 2,
    speed: ORBIT_SPEEDS[orbitIndex],
  };
});

/** The single source of truth for where a point sits on the ring — shared by the visible orbit line and the electron so they can never drift apart. */
export const getOrbitPosition = (orbit: OrbitConfig, angle: number, out = new Vector3()) => {
  out.set(Math.cos(angle) * orbit.radius, 0, Math.sin(angle) * orbit.radius);
  out.applyAxisAngle(X_AXIS, orbit.tiltX);
  out.applyAxisAngle(Y_AXIS, orbit.rotY);
  return out;
};
