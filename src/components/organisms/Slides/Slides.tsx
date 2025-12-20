'use client';

import { useLocale } from 'next-intl';
import { useState } from 'react';
import type { Slide } from '@/repositories/slide';
import MarkdownProxy from '../MarkdownProxy/MarkdownProxy';

interface SlidesProps {
  slides: Slide[];
  defaultImage: string;
}

export default function Slides(props: SlidesProps) {
  const { slides, defaultImage } = props;
  const locale = useLocale();
  const [currentSlideIndex, setCurrentSlideIndex] = useState<null | number>(null);
  const [secondarySlideIndex, setSecondarySlideIndex] = useState<null | number>(null);

  return (
    <div className="gap-4 block sm:flex flex-1 items-stretch">
      <div className="flex-1">
        {slides.map((slide, index) => (
          <div key={slide.pathEn}>
            <button
              type="button"
              className="text-4xl leading-16 cursor-pointer"
              onClick={() => {
                setCurrentSlideIndex(index);
                setSecondarySlideIndex(null);
              }}
            >
              {locale === 'en' ? slide.titleEn : slide.titleSe}
            </button>
            <div className={`${currentSlideIndex === index ? 'block' : 'hidden'}`}>
              <MarkdownProxy>{locale === 'en' ? slide.descriptionEn : slide.descriptionSe}</MarkdownProxy>
              <div className="ml-8 flex flex-col gap-2">
                {slide.subSlides?.map((subSlide, secondaryIndex) => (
                  <div key={subSlide.pathEn}>
                    <button
                      type="button"
                      className="text-4xl text-(--color-subtle) leading-16 cursor-pointer"
                      onClick={() => {
                        setSecondarySlideIndex(secondaryIndex);
                      }}
                    >
                      {locale === 'en' ? subSlide.titleEn : subSlide.titleSe}
                    </button>
                    {secondaryIndex === secondarySlideIndex && (
                      <MarkdownProxy>{locale === 'en' ? subSlide.descriptionEn : subSlide.descriptionSe}</MarkdownProxy>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 relative">
        <div
          className="bg-cover bg-no-repeat bg-center transition duration-800 h-full max-h-[900px] absolute left-0 right-0 top-0 bottom-0"
          style={{ backgroundImage: `url(${defaultImage})`, opacity: currentSlideIndex === null ? '1' : '0' }}
        />
        {slides.map((slide, index) => (
          <div
            key={slide.pathEn}
            className="bg-cover bg-no-repeat bg-center transition duration-800 h-full max-h-[900px] absolute left-0 right-0 top-0 bottom-0"
            style={{ backgroundImage: `url(${slide.imageUrl})`, opacity: index === currentSlideIndex ? '1' : '0' }}
          />
        ))}
      </div>
    </div>
  );
}
