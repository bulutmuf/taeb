import { createContext, useContext, useCallback, useState, type ReactNode } from "react";

interface LoadingCtx {
  /** True when at least one consumer has requested the overlay. */
  active: boolean;
  show: () => void;
  hide: () => void;
}

const LoadingContext = createContext<LoadingCtx>({
  active: false,
  show: () => {},
  hide: () => {},
});

/** Wrap the app in this to enable page-controlled loading overlays. */
export function LoadingProvider({ children }: { children: ReactNode }) {
  // Counter-based so multiple concurrent callers are safe.
  const [depth, setDepth] = useState(0);
  const show = useCallback(() => setDepth((d) => d + 1), []);
  const hide = useCallback(() => setDepth((d) => Math.max(0, d - 1)), []);

  return (
    <LoadingContext.Provider value={{ active: depth > 0, show, hide }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
