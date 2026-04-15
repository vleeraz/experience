import ScrollReveal from './ui/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-charcoal text-center mb-12 tracking-wide">
            About the Experience
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-lg text-charcoal-light leading-relaxed mb-6">
            <span className="text-orange font-semibold">
              Nearly 3 in 4 employees say burnout has reduced their focus and performance at work.
            </span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-lg text-orange font-semibold mb-8">This is where we come in.</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-base md:text-lg text-charcoal-light leading-relaxed mb-6">
            We create simple, guided experiences that help people step out of stress, refresh their
            energy, and return with more clarity, focus, and performance.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <p className="text-base md:text-lg text-charcoal-light leading-relaxed">
            Designed for companies, organizations, conferences, and hospitality spaces that care
            about both people and results.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
