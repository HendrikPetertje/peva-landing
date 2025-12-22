'use client';
import Image from 'next/image';
import type { Photograph } from '@/repositories/photograph';

interface ImageGalleryProps {
  images: Photograph[];
}

export default function ImageGallery(props: ImageGalleryProps) {
  const { images } = props;

  // Determine if an image should be "big" on desktop (every 3rd image starting from 0)
  const isBigImage = (index: number) => index % 3 === 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 auto-rows-auto">
      {images.map((image, index) => {
        const isBig = isBigImage(index);

        return (
          <div
            key={image.bigUrl}
            className={`relative ${isBig ? 'lg:col-span-2 lg:row-span-2' : 'col-span-1 row-span-1'}`}
          >
            <Image
              src={isBig ? image.bigUrl : image.smallUrl}
              alt={`Photography ${index + 1}`}
              width={isBig ? 800 : 400}
              height={isBig ? 450 : 225}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
}
