interface LoadingOverlayProps {
  className?: string;
}

export default function LoadingOverlay({ className = "overlay-enter" }: LoadingOverlayProps) {
  return (
    <div
      className={`fixed inset-0 bg-white z-[99999] flex items-center justify-center ${className}`}
    >
      <div className="progress-bar-container">
        <div className="progress-bar-fill" />
      </div>
    </div>
  );
}
