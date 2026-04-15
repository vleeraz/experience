import { retreats } from '../data/content';
import ScrollReveal from './ui/ScrollReveal';

export default function Retreats() {
  return (
    <section id="retreats" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-charcoal text-center mb-16 tracking-wide">
            Retreats
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {retreats.map((retreat, i) => (
            <ScrollReveal key={retreat.id} delay={i * 150}>
              <a
                href="#booking"
                className="group bg-white/65 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full block no-underline"
              >
                <div className="w-full h-56 bg-cream-light/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={retreat.image}
                    alt={retreat.title}
                    className="w-full h-full object-contain p-3 group-hover:scale-[1.02] transition-transform duration-400"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-normal text-charcoal mb-4 tracking-wide">
                    {retreat.title}
                    {retreat.featured && <span className="ml-2">⭐</span>}
                  </h3>

                  {retreat.features && (
                    <ul className="flex-1 space-y-2 mb-5">
                      {retreat.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-charcoal-light leading-relaxed">
                          <span className="text-orange mt-1 shrink-0">•</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  {retreat.description && (
                    <p className="text-sm text-orange italic leading-relaxed mb-2">
                      {retreat.description}
                    </p>
                  )}
                  {retreat.extra && (
                    <p className="text-sm text-orange italic leading-relaxed mb-4">
                      {retreat.extra}
                    </p>
                  )}

                  <p className="text-sm font-medium text-charcoal mt-auto">
                    Investment {retreat.price}
                    {retreat.priceNote && (
                      <span className="font-normal text-charcoal-light"> {retreat.priceNote}</span>
                    )}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
