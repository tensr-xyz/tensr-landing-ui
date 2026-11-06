'use client';

import { Children, useEffect, useRef, useState, type ReactNode } from 'react';

export function SwipeRow({
  children,
  tone = 'ink',
}: {
  children: ReactNode;
  tone?: 'ink' | 'cream';
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const count = items.length;

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const update = () => {
      const slides = Array.from(el.children) as HTMLElement[];
      if (!slides.length) return;
      const origin = slides[0].offsetLeft;
      let next = 0;
      slides.forEach((slide, i) => {
        if (el.scrollLeft + 8 >= slide.offsetLeft - origin) next = i;
      });
      setIndex(next);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    return () => el.removeEventListener('scroll', update);
  }, [count]);

  const on = tone === 'cream' ? 'bg-[#F9F4EB]' : 'bg-[#14473A]';
  const off = tone === 'cream' ? 'bg-[#F9F4EB]/35' : 'bg-[#14473A]/25';
  const label = tone === 'cream' ? 'text-[#F9F4EB]' : 'text-[#3D6A5E]';

  return (
    <div>
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain pr-5 pl-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingLeft: 20 }}
      >
        {items.map((item, i) => (
          <div key={i} className="w-[calc(100%-74px)] shrink-0 snap-start [&>*]:h-full">
            {item}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between px-5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {items.map((_, i) => (
            <span key={i} className={`h-1 ${i === index ? `w-[22px] ${on}` : `w-2 ${off}`}`} />
          ))}
        </div>
        <p className={`text-[13px] leading-4 ${label}`} aria-live="polite">
          Swipe · {count === 0 ? 0 : index + 1} of {count}
        </p>
      </div>
    </div>
  );
}
