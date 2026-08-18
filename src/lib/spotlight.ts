import type { MouseEvent } from "react";

/** Tracks cursor position into --spot-x/--spot-y for the `.spotlight` CSS utility. */
export const trackSpotlight = (e: MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
};
