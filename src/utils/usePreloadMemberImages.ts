import { useLayoutEffect } from "react";
import { useLoading } from "../context/LoadingContext";
import { getMemberImageCandidates } from "./memberImage";

/**
 * Tries to load `src`; on error, retries with the next candidate.
 * Resolves when one succeeds or all candidates are exhausted.
 */
function preloadOne(candidates: string[]): Promise<void> {
  return new Promise((resolve) => {
    if (!candidates.length) {
      resolve();
      return;
    }
    const [src, ...rest] = candidates;
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = () => preloadOne(rest).then(resolve);
    img.src = src;
  });
}

/**
 * Signals the global loading overlay to stay visible until all member
 * profile images have either loaded or confirmed as missing.
 *
 * Uses `useLayoutEffect` so `show()` is called synchronously before the
 * browser paints, preventing any visible flash between the Suspense overlay
 * disappearing and this overlay appearing.
 */
export function usePreloadMemberImages(names: string[]) {
  const { show, hide } = useLoading();

  useLayoutEffect(() => {
    if (!names.length) return;

    show();

    const promises = names.map((name) =>
      preloadOne(getMemberImageCandidates(name))
    );

    Promise.all(promises).finally(() => hide());

    // Safety: hide if component unmounts before images finish.
    return () => hide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
