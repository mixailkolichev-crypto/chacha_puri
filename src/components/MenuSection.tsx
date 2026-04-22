import { MENU_DATA, MenuItem } from '../constants';
import { motion } from 'motion/react';

interface MenuSectionProps {
  onImageClick: (image: string) => void;
}

export default function MenuSection({ onImageClick }: MenuSectionProps) {
  return (
    <section id="menu" className="py-12 md:py-24">
      <div className="space-y-24">
        {MENU_DATA.map((category) => (
          <div key={category.title} id={`category-${category.title.replace(/\s+/g, '-').toLowerCase()}`} className="scroll-mt-24">
            <h3 className="text-xs font-sans text-brand-accent tracking-[0.2em] uppercase category-underline">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
              {category.items.map((item: MenuItem, index: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex gap-6"
                  id={`item-${item.id}`}
                >
                  <div 
                    className="flex-shrink-0 w-24 h-32 md:w-32 md:h-44 rounded-full overflow-hidden cursor-zoom-in bg-stone-200 border border-brand-line transition-transform duration-300 hover:-translate-y-1"
                    onClick={() => onImageClick(item.image)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-lg md:text-xl font-serif font-medium flex items-baseline">
                        {item.name}
                        <span className="ml-3 text-[10px] font-sans opacity-40 uppercase tracking-wider font-normal">
                          {item.weight}
                        </span>
                      </h4>
                      <span className="font-sans text-sm font-bold tracking-tighter">{item.price}</span>
                    </div>
                    
                    {item.description && (
                      <p className="text-sm italic font-serif opacity-60 leading-relaxed text-brand-ink/80">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
