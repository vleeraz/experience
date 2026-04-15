import { programs } from '../data/content';
import ScrollReveal from './ui/ScrollReveal';

export default function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32 px-6 bg-gradient-to-br from-cream-dark/10 via-transparent to-earth/8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-charcoal text-center mb-16 tracking-wide">
            Programs
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <ScrollReveal key={program.id} delay={i * 120}>
              <div className="group bg-white/65 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                <div className="w-full h-64 bg-cream-light/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-[1.02] transition-transform duration-400"
                    loading="lazy"
                  />
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-normal text-charcoal mb-1 tracking-wide">
                    {program.title}
                  </h3>
                  {program.subtitle && (
                    <p className="text-sm text-charcoal-lighter italic mb-5">{program.subtitle}</p>
                  )}

                  <ul className="flex-1 space-y-2 mb-5">
                    {program.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-charcoal-light leading-relaxed">
                        <span className="text-orange mt-1 shrink-0">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {program.note && (
                    <p className="text-sm text-orange italic mb-2">{program.note}</p>
                  )}
                  <p className="text-sm font-medium text-charcoal">
                    Investment {program.price}{' '}
                    <span className="font-normal text-charcoal-light">{program.priceNote}</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
