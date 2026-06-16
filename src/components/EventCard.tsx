import { Link } from "react-router-dom";
import type { Event } from "../data/events";

interface EventCardProps {
  event: Event;
  variant?: "upcoming" | "past";
  lang: string;
  t: (key: string) => string;
}

export default function EventCard({ event, variant = "upcoming", lang, t }: EventCardProps) {
  const title = lang === "tr" ? event.titleTr : event.titleEn;
  const description = lang === "tr" ? event.descriptionTr : event.descriptionEn;

  if (variant === "past") {
    return (
      <div className="group">
        <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-surface-container-high">
          {event.image && (
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt={title}
              src={event.image}
            />
          )}
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              {lang === "tr" ? event.monthTr : event.month} {event.year}
            </span>
            <span className="text-xs font-medium text-on-surface-variant">{event.location}</span>
          </div>
          <h3 className="text-xl font-extrabold tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="space-y-2">
            <p className="text-sm text-on-surface leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Upcoming horizontal card variant
  return (
    <div className="group flex flex-col md:flex-row items-center gap-6 p-8 bg-surface-container-low hover:bg-surface-container rounded-xl transition-colors shadow-sm">
      <div className="flex-shrink-0 text-center md:text-left min-w-[120px]">
        <div className="text-3xl font-black text-tertiary">{event.day}</div>
        <div className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
          {lang === "tr" ? event.monthTr : event.month} {event.year}
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-3 mb-1">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-secondary/10 text-secondary uppercase">
            {event.type}
          </span>
          <span className="text-on-surface-variant text-sm">{event.time}</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      <Link
        to="/events"
        className="px-6 py-2 border border-outline-variant rounded-lg text-sm font-bold hover:bg-on-surface hover:text-surface transition-all"
      >
        {t("home.details")}
      </Link>
    </div>
  );
}
