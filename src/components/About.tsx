import ScrollReveal from './ui/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-charcoal mb-8 tracking-wide">
            About the Experience
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-lg text-charcoal-light leading-relaxed mb-2">
            <span className="text-orange font-semibold">
              Nearly 3 in 4 employees say burnout has reduced their focus and performance at work.
            </span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-lg text-orange font-semibold mb-6">This is where we come in.</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-base text-charcoal-light leading-relaxed">
            We create simple, guided experiences that help people step out of stress, refresh their
            energy, and return with more clarity, focus, and performance. Designed for companies,
            organizations, conferences, and hospitality spaces that care about both people and results.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
