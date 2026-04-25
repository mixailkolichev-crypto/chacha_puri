/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import MenuSection from './components/MenuSection';
import Lightbox from './components/Lightbox';

import { MENU_DATA } from './constants';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="md:flex min-h-screen bg-brand-cream">
      {/* Sidebar - Desktop / Header - Mobile */}
      <aside className="md:w-80 lg:w-96 md:h-screen md:sticky md:top-0 md:sidebar-border bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-between">
        <div className="logo-area mb-12 md:mb-0">
          <img 
            src="https://i.postimg.cc/fbxQ4bfB/123456.png" 
            alt="ЧачаПури" 
            className="w-full max-w-[200px] h-auto object-contain"
          />
        </div>

        <nav className="my-12 md:my-0 flex-1 overflow-y-auto py-8">
          <ul className="space-y-4 md:space-y-6">
            {MENU_DATA.map((category) => (
              <li key={category.title} className="group">
                <a 
                  href={`#category-${category.title.replace(/\s+/g, '-').toLowerCase()}`} 
                  className="text-[10px] md:text-xs uppercase tracking-widest font-medium group-hover:text-brand-accent transition-colors flex items-center"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-brand-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {category.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="contact-info mt-auto pt-12 space-y-4 text-[13px] font-sans opacity-70 border-t border-brand-line md:border-none">
          <div>
            <p className="uppercase text-[10px] tracking-widest mb-1 opacity-50">Адрес</p>
            <p>Москва, Авиамоторная улица, 41В</p>
          </div>
          <div>
            <p className="uppercase text-[10px] tracking-widest mb-1 opacity-50">Телефон</p>
            <p>+7 (968) 853-09-09</p>
          </div>
          <div>
            <p className="uppercase text-[10px] tracking-widest mb-1 opacity-50">Режим работы</p>
            <p>Ежедневно: 11:00 — 23:00</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-16 lg:p-24 overflow-hidden flex flex-col">
        <div className="flex-1">
          <MenuSection onImageClick={(img) => setSelectedImage(img)} />
        </div>
        
        {/* Decorative Image Strip */}
        <div className="mt-20 pt-12 border-t border-brand-line hidden lg:flex items-end gap-12">
          <div className="flex gap-4">
            {['Хинкали', 'Лобио', 'Пхали', 'Вино'].map((label, i) => (
              <div 
                key={label}
                className="w-24 h-32 rounded-full bg-stone-100 border-brand-line flex items-center justify-center overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(`https://picsum.photos/seed/strip${i}/800/1200`)}
              >
                <div className="text-[9px] uppercase tracking-widest text-brand-accent opacity-40 -rotate-90 group-hover:opacity-100 transition-opacity">
                  {label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex-1 flex items-center justify-end">
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent opacity-60 mb-2">Листайте, чтобы изучить</p>
              <div className="w-12 h-px bg-brand-accent ml-auto opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Simple Footer for Mobile */}
        <footer className="md:hidden pt-24 pb-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">
            &copy; {new Date().getFullYear()} ЧачаПури — Аутентичная грузинская кухня
          </p>
        </footer>
      </main>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}

