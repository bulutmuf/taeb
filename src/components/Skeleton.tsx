interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  circle?: boolean;
}

export default function Skeleton({ className = "", width, height, circle }: SkeletonProps) {
  const style: React.CSSProperties = {
    width: width,
    height: height,
    borderRadius: circle ? '9999px' : '4px'
  };

  return (
    <div 
      className={`skeleton ${className}`}
      style={style}
    />
  );
}
