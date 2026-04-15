export default function Footer() {
  return (
    <footer className="bg-charcoal text-orange py-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <div className="space-y-2">
          <p className="text-base">
            <strong>Contact:</strong>{' '}
            <a
              href="mailto:awakenwithyllka@gmail.com"
              className="font-semibold hover:underline"
            >
              awakenwithyllka@gmail.com
            </a>{' '}
            |{' '}
            <a href="tel:+38345267399" className="font-semibold hover:underline">
              +383 (45) 267-399
            </a>{' '}
            |{' '}
            <a
              href="https://instagram.com/awakenwithyllka"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              Instagram
            </a>
          </p>
          <p>
            Book your call →{' '}
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              Calendly
            </a>
          </p>
        </div>
        <p className="text-sm text-orange/60">
          © {new Date().getFullYear()} A Unique Transformational Wellness Experience. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
