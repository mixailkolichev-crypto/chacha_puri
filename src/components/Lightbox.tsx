import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LightboxProps {
  image: string | null;
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-ink/95 backdrop-blur-sm p-4 cursor-zoom-out"
          id="lightbox-overlay"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-cream hover:text-white transition-colors z-10"
              id="close-lightbox"
            >
              <X size={32} />
            </button>
            <img
              src={image}
              alt="Увеличенное изображение"
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
              referrerPolicy="no-referrer"
              id="lightbox-image"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
