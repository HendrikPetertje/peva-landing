'use server';

interface WeddingPhotograph {
  smallUrl: string;
  bigUrl: string;
}

export const weddingPhotographs = async (): Promise<WeddingPhotograph[]> => [];

export const getWeddingPhotographsIntroduction = async () => ({
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
