export interface CollageObject {
    image: any;
    title: string;
    description: string;
    date: string;
}

export const COLLAGES: CollageObject[] = [
    {
        image: 'glampingCollage.jpg',
        title: 'Glamping',
        description: `I started with 3 random words: connection, comforting, and sitting. I did this woman, connecting to nature but by remaining comfortable and seated.\n\nThis is how camping has been feeling to me. Like its comfortable and luxurious while still being in nature and rugged.`,
        date: 'June 21, 2026',
    },
    {
        image: 'girlsLikeGirlsCollage.jpg',
        title: 'Girls Like Girls',
        description:
            'After watching the movie Girls Like Girls, I got inspired to make this sapphic spread.',
        date: 'May 5, 2026',
    },
];
