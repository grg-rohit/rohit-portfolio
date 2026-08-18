import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

/** True once the element has scrolled near the viewport; stays true afterward. */
export const useInView = <T extends HTMLElement>(rootMargin = "200px"): [RefObject<T | null>, boolean] => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return [ref, inView];
};
