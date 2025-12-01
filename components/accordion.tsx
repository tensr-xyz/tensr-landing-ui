'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer?: string;
  id: string;
}

export const Accordion = ({ items }: { items: AccordionItemProps[] }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="text-font w-full" data-orientation="vertical">
      {items.map(item => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            data-state={isOpen ? 'open' : 'closed'}
            data-orientation="vertical"
            className="border-t border-border last:border-b focus-within:relative focus-within:z-10"
          >
            <h3
              data-orientation="vertical"
              data-state={isOpen ? 'open' : 'closed'}
              className="flex"
            >
              <button
                type="button"
                aria-controls={`accordion-content-${item.id}`}
                aria-expanded={isOpen}
                data-state={isOpen ? 'open' : 'closed'}
                data-orientation="vertical"
                id={`accordion-trigger-${item.id}`}
                className="group pt-[0.98rem] pb-[1.05rem] flex flex-1 cursor-pointer items-center justify-between text-left"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                {item.question}
                <span className="ml-4 h-5 w-5">
                  <span className={isOpen ? 'hidden' : 'inline'}>
                    <ChevronDown className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className={isOpen ? 'inline' : 'hidden'}>
                    <span className="icon-glyph-11" aria-hidden="true">
                      ↑
                    </span>
                  </span>
                </span>
              </button>
            </h3>
            <div
              data-state={isOpen ? 'open' : 'closed'}
              id={`accordion-content-${item.id}`}
              hidden={!isOpen}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              data-orientation="vertical"
              className={`overflow-hidden transition-all ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
            >
              {item.answer && <div className="text-muted-foreground">{item.answer}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};
