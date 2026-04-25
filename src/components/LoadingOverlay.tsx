export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-white z-[99999] flex items-center justify-center">
      <div className="progress-bar-container">
        <div className="progress-bar-fill" />
      </div>
    </div>
  );
}
