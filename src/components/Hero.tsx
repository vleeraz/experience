export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-gradient-to-br from-cream-light/50 via-cream to-cream-dark/30">
      {/* Decorative blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[20%] w-72 h-72 bg-earth/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-orange/8 rounded-full blur-3xl" />
        <div className="absolute top-[30%] left-[50%] w-64 h-64 bg-white/15 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 text-center max-w-3xl animate-[fadeInUp_0.8s_ease-out]">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-charcoal leading-tight tracking-wide mb-4">
          A Unique Transformational Wellness Experience
        </h1>

        <p className="text-lg md:text-xl text-charcoal-light italic mb-10 max-w-xl mx-auto">
          A space for teams to reset, recharge and return with greater focus and performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#booking"
            className="px-10 py-4 bg-gradient-to-r from-orange to-orange-light text-white font-semibold rounded-full shadow-lg shadow-orange/30 hover:shadow-orange/50 hover:-translate-y-0.5 transition-all text-base"
          >
            Book Your Experience
          </a>
          <a
            href="https://calendly.com/awakenwithyllka/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 bg-white/15 text-charcoal border border-charcoal/15 rounded-full font-medium hover:bg-white/25 hover:-translate-y-0.5 transition-all backdrop-blur-sm text-sm"
          >
            Book Your Call →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
