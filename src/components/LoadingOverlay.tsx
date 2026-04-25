import { LoaderOne } from "./ui/loader";

export default function LoadingOverlay() {
  return (
    <div className="loading-overlay">
      <div className="flex flex-col items-center gap-4">
        <LoaderOne />
        <span className="text-[10px] font-bold tracking-[0.2em] text-on-surface/40 uppercase">
          TAEB
        </span>
      </div>
    </div>
  );
}
