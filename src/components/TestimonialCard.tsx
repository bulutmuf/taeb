interface TestimonialCardProps {
  quote: string;
  name: string;
  image?: string;
}

export default function TestimonialCard({ quote, name, image }: TestimonialCardProps) {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
      <p className="text-on-surface-variant leading-relaxed italic mb-6">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="material-symbols-outlined text-on-surface-variant">person</span>
          )}
        </div>
        <span className="font-bold text-on-surface text-sm">{name}</span>
      </div>
    </div>
  );
}
