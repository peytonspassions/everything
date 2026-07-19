export interface PoemObject {
    id: number;
    title: string;
    poem: string;
    date: string;
    tags?: Tag[];
}

export enum Tag {
    RELATIONSHIPS = 'Relationships',
    ANGER = 'Anger',
    GRIEF = 'Grief',
    POLITICS = 'Politics',
    SILLY = 'Silly',
}

export const POEMS: PoemObject[] = [
    {
        id: 3,
        date: 'February 7, 2026',
        title: 'My Transitions',
        tags: [Tag.GRIEF],
        poem: `Your absence grows strong
in the transitions of my day
The emptiness growing
unsure how to keep going

Should I work on a hobby?
Or go take a shower?
During times just like these
I'd get on the floor, onto my knees

You'd come over to see me,
tail wagging slightly
You'd bow your head into my chest,
my face dropping into your neck

We'd hug for a few seconds
then maybe you'd get silly
Our love together would sing
until I was ready to do the next thing

My transitions look different
now that you're gone
I stand in a room looking around
You are no where to be found

It's just me now,
to sit in my transition
finding the courage to do the next
to fill that void no matter how vexed
        `,
    },
    {
        id: 2,
        title: 'Bad Art',
        tags: [Tag.SILLY],
        poem: `My art is bad.

I sit and create with everything I've got in me
And the art is bad

That is okay, though!
The point of creating is to process an emotion
so it is okay!

I try my best.
Even when things don't turn out perfectly, I know
That I've tried my best

Even this poem!
It's not great— very literal and easy to write
Even this poem

Is bad art.`,
        date: 'January 28, 2026',
    },
    {
        id: 1,
        title: 'Stolen Moments',
        poem: `I wait until I can breathe a bit
before I speak my mind—
perfectly articulate,
praying you understand this time.

You never do, of course,
you're lost in thoughts your own,
regarding opinions of yours
that apply to you alone.

My words fly out at rapid speed,
landing at a selfish door—
it's just another opportunity
for you to share yours.

It's not the act of love
that you always seem to claim,
it's only a bitter taste of
“well, I feel all the same”.

Stolen moments that I created,
just for me to share
leaving me all dissociated,
without someone else to care.

Now I sit here in these feelings
with nowhere for them to go,
in fear that if I'm speaking,
I'll get lost inside your ego.`,
        date: 'January 28, 2026',
        tags: [Tag.RELATIONSHIPS, Tag.ANGER],
    },
];
