'use server';
// Funky mass import
import image1Original from './photographyImages/1.jpg';
import image2Original from './photographyImages/2.jpg';
import image3Original from './photographyImages/3.jpg';
import image4Original from './photographyImages/4.jpg';
import image5Original from './photographyImages/5.jpg';
import image6Original from './photographyImages/6.jpg';
import image7Original from './photographyImages/7.jpg';
import image8Original from './photographyImages/8.jpg';
import image9Original from './photographyImages/9.jpg';
import image10Original from './photographyImages/10.jpg';
import image11Original from './photographyImages/11.jpg';
import image12Original from './photographyImages/12.jpg';

import image1Small from './photographyImages/400-1.jpg';
import image2Small from './photographyImages/400-2.jpg';
import image3Small from './photographyImages/400-3.jpg';
import image4Small from './photographyImages/400-4.jpg';
import image5Small from './photographyImages/400-5.jpg';
import image6Small from './photographyImages/400-6.jpg';
import image7Small from './photographyImages/400-7.jpg';
import image8Small from './photographyImages/400-8.jpg';
import image9Small from './photographyImages/400-9.jpg';
import image10Small from './photographyImages/400-10.jpg';
import image11Small from './photographyImages/400-11.jpg';
import image12Small from './photographyImages/400-12.jpg';

import image1Big from './photographyImages/800-1.jpg';
import image2Big from './photographyImages/800-2.jpg';
import image3Big from './photographyImages/800-3.jpg';
import image4Big from './photographyImages/800-4.jpg';
import image5Big from './photographyImages/800-5.jpg';
import image6Big from './photographyImages/800-6.jpg';
import image7Big from './photographyImages/800-7.jpg';
import image8Big from './photographyImages/800-8.jpg';
import image9Big from './photographyImages/800-9.jpg';
import image10Big from './photographyImages/800-10.jpg';
import image11Big from './photographyImages/800-11.jpg';
import image12Big from './photographyImages/800-12.jpg';

export interface Photograph {
  smallUrl: string;
  bigUrl: string;
  originalUrl: string;
}

export const getPhotographs = async (): Promise<Photograph[]> => [
  {
    smallUrl: image1Small.src,
    bigUrl: image1Big.src,
    originalUrl: image1Original.src,
  },
  {
    smallUrl: image2Small.src,
    bigUrl: image2Big.src,
    originalUrl: image2Original.src,
  },
  {
    smallUrl: image3Small.src,
    bigUrl: image3Big.src,
    originalUrl: image3Original.src,
  },
  {
    smallUrl: image4Small.src,
    bigUrl: image4Big.src,
    originalUrl: image4Original.src,
  },
  {
    smallUrl: image5Small.src,
    bigUrl: image5Big.src,
    originalUrl: image5Original.src,
  },
  {
    smallUrl: image6Small.src,
    bigUrl: image6Big.src,
    originalUrl: image6Original.src,
  },
  {
    smallUrl: image7Small.src,
    bigUrl: image7Big.src,
    originalUrl: image7Original.src,
  },
  {
    smallUrl: image8Small.src,
    bigUrl: image8Big.src,
    originalUrl: image8Original.src,
  },
  {
    smallUrl: image9Small.src,
    bigUrl: image9Big.src,
    originalUrl: image9Original.src,
  },
  {
    smallUrl: image10Small.src,
    bigUrl: image10Big.src,
    originalUrl: image10Original.src,
  },
  {
    smallUrl: image11Small.src,
    bigUrl: image11Big.src,
    originalUrl: image11Original.src,
  },
  {
    smallUrl: image12Small.src,
    bigUrl: image12Big.src,
    originalUrl: image12Original.src,
  },
];

export const getPhotographsIntroduction = async () => ({
  en: `
When not working on code or hiking in the woods I love working with wedding and event photography around the city of
Sundsvall (Sweden).

Need beautiful pictures taken of your special day? Contact me using the contact details
above and we'll have a (free of charge) introduction meeting where we'll go over your wishes, needs,
preferred photo styles and everything else that matters all to make your important day - and the memories of it
afterward - fantastic!.

Check out the selection of wedding and event pictures below for some inspiration!
  `,
  se: `
När jag inte arbetar med kod eller vandrar i skogen älskar jag att arbeta med evenemang- och bröllopsfotografering runt Sundsvall.

Behöver ni vackra bilder från er speciella dag? Kontakta mig via kontaktuppgifterna ovan, så bokar vi ett (kostnadsfritt) introduktionsmöte där vi går igenom era önskemål, behov, föredragna fotostilar och allt annat som är viktigt för att göra så att er dag – och minnena efteråt – fantastiska.

Kolla in urvalet av evenamang- och bröllopsbilder nedan för inspiration!
`,
});
