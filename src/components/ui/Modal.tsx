import { type ReactNode, useEffect, useRef } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export default function Modal({ isOpen, onClose, children, title }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-charcoal/40 backdrop-blur-sm transition-opacity"
      onClick={(e) => e.target === overlayRef.current && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white/96 rounded-2xl shadow-2xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-orange text-3xl leading-none hover:opacity-70 transition-opacity cursor-pointer"
          aria-label="Close modal"
        >
          ×
        </button>
        <h3 className="font-display text-3xl font-normal text-charcoal mb-6">{title}</h3>
        {children}
      </div>
    </div>
  );
}
