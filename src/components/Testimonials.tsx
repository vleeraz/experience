import { testimonials } from '../data/content';
import ScrollReveal from './ui/ScrollReveal';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-transparent to-cream-dark/15">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-charcoal text-center mb-16 tracking-wide">
            What People Say
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 120}>
              <div className="bg-white/65 backdrop-blur-sm rounded-xl p-7 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                {/* Decorative quote mark */}
                <div className="text-orange/30 text-5xl font-display leading-none mb-3">"</div>
                <p className="text-sm text-charcoal-light leading-relaxed flex-1 mb-5">
                  {t.quote}
                </p>
                <div className="border-t border-cream-dark/30 pt-4">
                  <p className="font-display font-medium text-charcoal text-sm">{t.author}</p>
                  <p className="text-xs text-charcoal-lighter mt-0.5">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
