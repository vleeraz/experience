import { useState } from 'react';
import { galleryImages } from '../data/content';
import ScrollReveal from './ui/ScrollReveal';

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-charcoal text-center mb-6 tracking-wide">
            Gallery
          </h2>
          <p className="text-center text-charcoal-light italic mb-14 max-w-lg mx-auto">
            Moments from our retreats, workshops, and experiences
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, i) => (
            <ScrollReveal key={src} delay={i * 60}>
              <button
                onClick={() => setSelected(src)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-cream-light/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange/50"
              >
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-charcoal/70 backdrop-blur-sm cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl leading-none transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <img
            src={selected}
            alt="Gallery full view"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
