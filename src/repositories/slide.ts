'use server';

export interface Slide {
  pathEn: string;
  pathSe: string;
  titleEn: string;
  titleSe: string;
  descriptionEn: string;
  descriptionSe: string;
  imageUrl: string;
  subSlides?: Slide[];
}

export const getSlides = async (): Promise<Slide[]> => [
  {
    pathEn: 'linkedin',
    pathSe: 'linkedin',
    titleEn: 'LinkedIn',
    titleSe: 'LinkedIn',
    descriptionEn:
      '[Connect with me on LinkedIn](https://www.linkedin.com/in/hendrik-peter-van-der-meulen/) to explore professional opportunities and collaborations.',
    descriptionSe:
      '[Anslut med mig på LinkedIn](https://www.linkedin.com/in/hendrik-peter-van-der-meulen/) för att utforska professionella möjligheter och samarbeten.',
    imageUrl: '',
  },
  {
    pathEn: 'github-gitlab',
    pathSe: 'github-gitlab',
    titleEn: 'Github & Gitlanb',
    titleSe: 'Github & Gitlanb',
    descriptionEn:
      'Check out my [Github](https://github.com/hendrikpetertje), [Gist](https://gist.github.com/HendrikPetertje) and [Gitlab](https://git.hendrikpeter.net/) profiles to see current and former projects',
    descriptionSe:
      'Kolla in mina [Github](https://github.com/hendrikpetertje), [Gist](https://gist.github.com/HendrikPetertje) och [Gitlab](https://git.hendrikpeter.net/) profiler för att se nuvarande och tidigare projekt',
    imageUrl: '',
  },
  {
    pathEn: 'photography',
    pathSe: 'fotografi',
    titleEn: 'Photography',
    titleSe: 'Fotografi',
    descriptionEn: '',
    descriptionSe: '',
    imageUrl: '',
    subSlides: [
      {
        pathEn: 'photography-weddings',
        pathSe: 'fotografi-brollop',
        titleEn: 'Weddings',
        titleSe: 'Bröllop',
        descriptionEn:
          "I photograph weddings, [you can see some samples and check if I'm a good fit for your upcoming wedding!](/wedding)",
        descriptionSe:
          'Jag fotograferar bröllop, [du kan se några exempel och kolla om jag passar för ditt kommande bröllop!](/wedding)',
        imageUrl: '',
      },
      {
        pathEn: 'photography-other',
        pathSe: 'fotografi-annat',
        titleEn: 'Other',
        titleSe: 'Annat',
        descriptionEn:
          'I love to go out with Camera & Drone to make beautiful pictures, check out [my Unsplash profile](https://unsplash.com/@hendrikpeter) for a small selection',
        descriptionSe:
          'Jag älskar att gå ut med kamera & drönare för att ta vackra bilder, kolla in [min Unsplash-profil](https://unsplash.com/@hendrikpeter) för ett litet urval',
        imageUrl: '',
      },
    ],
  },
];
