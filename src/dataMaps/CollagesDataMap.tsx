export interface CollageObject {
    id: number;
    image: any;
    title: string;
    description: string;
    date: string;
    materials?: Materials[];
}

export enum Materials {
    MAGAZINE = 'Magazine Scraps',
    TAPE = 'Decorative Tapes',
    STICKERS = 'Stickers',
    STAMPS = 'Ink Stamps',
    PEN = 'Pen or Markers',
}

export const COLLAGES: CollageObject[] = [
    {
        id: 2,
        image: 'glampingCollage.jpg',
        title: 'Glamping',
        description: `I started with 3 random words: connection, comforting, and sitting. I did this woman, connecting to nature but by remaining comfortable and seated.\n\nThis is how camping has been feeling to me. Like its comfortable and luxurious while still being in nature and rugged.`,
        date: 'June 21, 2026',
        materials: [Materials.MAGAZINE],
    },
    {
        id: 1,
        image: 'girlsLikeGirlsCollage.jpg',
        title: 'Girls Like Girls',
        description:
            'After watching the movie Girls Like Girls, I got inspired to make this sapphic spread.',
        date: 'May 5, 2026',
        materials: [Materials.MAGAZINE, Materials.STICKERS, Materials.TAPE],
    },
];
