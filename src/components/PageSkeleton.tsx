import Skeleton from "./Skeleton";

export function HomeSkeleton() {
  return (
    <div className="w-full">
      {/* Hero Skeleton */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 pt-32 pb-24">
        <div className="md:col-span-7 space-y-6">
          <Skeleton width={120} height={24} className="rounded-full" />
          <Skeleton width="80%" height={60} />
          <Skeleton width="60%" height={24} />
          <div className="flex gap-4 pt-4">
            <Skeleton width={160} height={50} />
            <Skeleton width={160} height={50} />
          </div>
        </div>
        <div className="md:col-span-5">
          <Skeleton width="100%" height={500} className="rounded-xl" />
        </div>
      </section>

      {/* Stats Skeleton */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} width="100%" height={200} className="rounded-2xl" />
          ))}
        </div>
      </section>
    </div>
  );
}

export function GenericSkeleton() {
  return (
    <div className="w-full pt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Skeleton width={100} height={20} className="mb-6" />
        <Skeleton width="50%" height={40} className="mb-4" />
        <Skeleton width="70%" height={20} className="mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton width="100%" height={200} className="rounded-xl" />
              <Skeleton width="80%" height={20} />
              <Skeleton width="40%" height={16} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PageSkeleton() {
  return <GenericSkeleton />;
}
