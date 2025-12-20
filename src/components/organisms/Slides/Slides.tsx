'use client';

import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import type { Slide } from '@/repositories/slide';
import MarkdownProxy from '../MarkdownProxy/MarkdownProxy';

interface SlidesProps {
  slides: Slide[];
}

export default function Slides(props: SlidesProps) {
  const { slides } = props;
  const locale = useLocale();
  const [currentPageIndex, setCurrentPageIndex] = useState<null | number>(null);
  const [secondaryPageIndex, setSecondaryPageIndex] = useState<null | number>(null);

  return (
    <div className="gap-4 block sm:flex">
      <div className="flex-1">
        {slides.map((slide, index) => (
          <div key={slide.pathEn}>
            <button
              type="button"
              className="text-4xl leading-16 cursor-pointer"
              onClick={() => {
                setCurrentPageIndex(index);
                setSecondaryPageIndex(null);
              }}
            >
              {locale === 'en' ? slide.titleEn : slide.titleSe}
            </button>
            <div className={`${currentPageIndex === index ? 'block' : 'hidden'}`}>
              <MarkdownProxy>{locale === 'en' ? slide.descriptionEn : slide.descriptionSe}</MarkdownProxy>
              <div className="ml-8 flex flex-col gap-2">
                {slide.subSlides?.map((subSlide, secondaryIndex) => (
                  <div key={subSlide.pathEn}>
                    <button
                      type="button"
                      className="text-4xl text-(--color-subtle) leading-16 cursor-pointer"
                      onClick={() => {
                        setSecondaryPageIndex(secondaryIndex);
                      }}
                    >
                      {locale === 'en' ? subSlide.titleEn : subSlide.titleSe}
                    </button>
                    {secondaryIndex === secondaryPageIndex && (
                      <MarkdownProxy>{locale === 'en' ? subSlide.descriptionEn : subSlide.descriptionSe}</MarkdownProxy>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1">Right</div>
    </div>
  );
}
