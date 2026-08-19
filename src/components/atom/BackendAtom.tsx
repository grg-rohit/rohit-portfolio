import { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useInView } from "@/lib/useInView";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { AtomErrorBoundary } from "./AtomErrorBoundary";
import { AtomScene } from "./AtomScene";
import type { BackendSkill } from "./backendSkills";

export const BackendAtom = () => {
  const [containerRef, inView] = useInView<HTMLDivElement>();
  const reducedMotion = useReducedMotion();
  const [selected, setSelected] = useState<BackendSkill | null>(null);

  // Coarse pointer (touch) drag would fight the page's vertical scroll, so only
  // mouse/trackpad devices get drag-to-rotate; touch still gets auto-rotate + tap-to-select.
  const allowDrag = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches,
    []
  );

  const motionFactor = reducedMotion ? 0.05 : 1;

  return (
    <div className="relative">
      <div
        ref={containerRef}
        aria-hidden="true"
        className="glass relative h-[360px] sm:h-[440px] lg:h-[560px] overflow-hidden"
      >
        {inView && (
          <AtomErrorBoundary>
            <Suspense fallback={null}>
              <Canvas
                dpr={[1, 1.5]}
                camera={{ position: [0, 0.6, 6.5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
              >
                <AtomScene
                  motionFactor={motionFactor}
                  allowDrag={allowDrag}
                  selected={selected}
                  onSelect={setSelected}
                />
              </Canvas>
            </Suspense>
          </AtomErrorBoundary>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>{allowDrag ? "Drag to rotate · click a skill" : "Tap a skill for details"}</span>
        {selected && (
          <button
            onClick={() => setSelected(null)}
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {selected && (
        <div className="glass mt-3 p-4 animate-fade-in">
          <p className="text-sm font-semibold text-foreground">{selected.name}</p>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{selected.description}</p>
        </div>
      )}
    </div>
  );
};
