import { Component } from "react";
import type { ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

/** Swallows WebGL init failures — the skill list next to the canvas already carries the real content. */
export class AtomErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("Backend atom failed to render:", error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
