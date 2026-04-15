import { useState, type FormEvent } from 'react';
import { bookingPrograms } from '../data/content';
import ScrollReveal from './ui/ScrollReveal';

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);

  const toggleProgram = (name: string) => {
    setSelectedPrograms((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);
    // Append programs manually since they're checkboxes managed by React state
    selectedPrograms.forEach((p) => data.append('programs[]', p));

    try {
      const res = await fetch('https://formspree.io/f/mkopzdgo', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="booking" className="py-24 md:py-32 px-6">
        <div className="max-w-xl mx-auto text-center bg-white/70 backdrop-blur-sm rounded-xl p-12 shadow-md">
          <div className="text-5xl mb-4">✨</div>
          <h2 className="font-display text-3xl text-charcoal mb-4">Thank You!</h2>
          <p className="text-charcoal-light">
            Your booking request has been sent. We'll get back to you shortly.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 text-orange font-semibold hover:opacity-75 transition-opacity cursor-pointer"
          >
            Send another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 md:py-32 px-6 bg-gradient-to-b from-cream/60 to-cream">
      <div className="max-w-xl mx-auto">
        <ScrollReveal>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg">
            <h2 className="font-display text-3xl md:text-4xl font-normal text-charcoal text-center mb-3 tracking-wide">
              Book Your Experience
            </h2>
            <p className="text-center text-charcoal-light italic mb-10">
              Fill in your details below and we'll get back to you shortly
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-charcoal">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-orange/20 rounded-lg bg-white/90 text-charcoal placeholder:text-charcoal-lighter/60 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-charcoal">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-orange/20 rounded-lg bg-white/90 text-charcoal placeholder:text-charcoal-lighter/60 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-charcoal">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-orange/20 rounded-lg bg-white/90 text-charcoal placeholder:text-charcoal-lighter/60 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all"
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-charcoal">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-orange/20 rounded-lg bg-white/90 text-charcoal placeholder:text-charcoal-lighter/60 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="group_size" className="block mb-2 text-sm font-medium text-charcoal">
                    Group Size
                  </label>
                  <input
                    type="number"
                    id="group_size"
                    name="group_size"
                    min={1}
                    className="w-full px-4 py-3 border border-orange/20 rounded-lg bg-white/90 text-charcoal focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="preferred_date" className="block mb-2 text-sm font-medium text-charcoal">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferred_date"
                    name="preferred_date"
                    className="w-full px-4 py-3 border border-orange/20 rounded-lg bg-white/90 text-charcoal focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block mb-2 text-sm font-medium text-charcoal">
                  Preferred Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="City, venue, or online"
                  className="w-full px-4 py-3 border border-orange/20 rounded-lg bg-white/90 text-charcoal placeholder:text-charcoal-lighter/60 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all"
                />
              </div>

              <div>
                <label className="block mb-3 text-sm font-medium text-charcoal">
                  Select Programs *{' '}
                  <span className="font-normal text-charcoal-lighter">(choose one or more)</span>
                </label>
                <div className="space-y-2">
                  {bookingPrograms.map((p) => (
                    <label
                      key={p.label}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedPrograms.includes(p.label)
                          ? 'border-orange bg-orange/5'
                          : 'border-orange/15 bg-white/50 hover:border-orange/40'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedPrograms.includes(p.label)}
                        onChange={() => toggleProgram(p.label)}
                        className="w-5 h-5 accent-orange cursor-pointer shrink-0"
                      />
                      <span className="flex-1 text-sm text-charcoal">{p.label}</span>
                      <span className="text-sm font-semibold text-orange whitespace-nowrap">
                        {p.price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-charcoal">
                  Special Requests or Questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us anything we should know..."
                  className="w-full px-4 py-3 border border-orange/20 rounded-lg bg-white/90 text-charcoal placeholder:text-charcoal-lighter/60 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all resize-y"
                />
              </div>

              <input type="hidden" name="_subject" value="New Booking Request - Team Awaken" />
              <input type="text" name="_gotcha" className="hidden" />

              {status === 'error' && (
                <p className="text-red-600 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-orange to-orange-light text-white font-semibold rounded-full shadow-lg shadow-orange/25 hover:shadow-orange/45 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === 'sending' ? 'Sending...' : 'Book Your Experience'}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
