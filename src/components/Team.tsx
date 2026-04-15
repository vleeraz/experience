import { useState } from 'react';
import { teamMembers } from '../data/content';
import Modal from './ui/Modal';
import ScrollReveal from './ui/ScrollReveal';

export default function Team() {
  const [modalId, setModalId] = useState<string | null>(null);
  const activeMember = teamMembers.find((m) => m.id === modalId);

  return (
    <section id="team" className="py-24 md:py-32 px-6 bg-gradient-to-b from-cream/50 to-cream-dark/20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-charcoal text-center mb-16 tracking-wide">
            Meet the Team
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 150}>
              <div className="group bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg border-2 border-orange/25 shrink-0"
                  loading="lazy"
                />
                <div className="text-center sm:text-left">
                  <h3 className="font-display text-2xl font-normal text-charcoal mb-3 tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                    {member.shortBio}
                  </p>
                  <button
                    onClick={() => setModalId(member.id)}
                    className="text-orange font-semibold text-sm hover:opacity-75 transition-opacity cursor-pointer underline underline-offset-2"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!modalId}
        onClose={() => setModalId(null)}
        title={`About ${activeMember?.name ?? ''}`}
      >
        {activeMember?.fullBio.map((p, i) => (
          <p key={i} className="text-base text-charcoal-light leading-relaxed mb-4 last:mb-0">
            {p}
          </p>
        ))}
      </Modal>
    </section>
  );
}
