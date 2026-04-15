export default function Footer() {
  return (
    <footer className="bg-charcoal text-orange py-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <div className="space-y-2">
          <p className="text-base">
            <strong>Contact:</strong>{' '}
            <a
              href="mailto:teamawaken.info@gmail.com"
              className="font-semibold hover:underline"
            >
              teamawaken.info@gmail.com
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
              href="https://calendly.com/awakenwithyllka/new-meeting"
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
        <p className="text-xs text-orange/40">
          created by <a href="https://exodia.media" target="_blank" rel="noopener noreferrer" className="hover:underline">exodia.media</a>
        </p>
      </div>
    </footer>
  );
}
