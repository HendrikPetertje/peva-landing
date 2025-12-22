'use server';

interface WeddingPhotograph {
  smallUrl: string;
  bigUrl: string;
}

export const weddingPhotographs = async (): Promise<WeddingPhotograph[]> => [];

export const getWeddingPhotographsIntroduction = async () => ({
  en: `
When not working on code or hiking in the woods I love working with wedding photography around the city of
Sundsvall in Sweden.

Need beautiful pictures taken of your special day? Contact me using the contact details
above and we'll have a (free of charge) introduction meeting where we'll go over your wishes, needs,
preferred photo styles and everything else that matters to make your wedding day - and the memories of it
afterward - fantastic!.

Check out the selection of wedding pictures below for some inspiration!
  `,
  se: `
När jag inte arbetar med kod eller vandrar i skogen älskar jag att arbeta med bröllopsfotografering runt Sundsvall i Sverige.

Behöver du fina bilder tagna av din speciella dag? Kontakta mig med hjälp av kontaktuppgifterna ovan så har vi ett (kostnadsfritt) introduktionsmöte där vi går igenom dina önskemål, behov, föredragna fotostilar och allt annat som är viktigt för att göra din bröllopsdag - och minnena av det efteråt - fantastiska!.

Kolla in urvalet av bröllopsbilder nedan för lite inspiration!
`,
});
