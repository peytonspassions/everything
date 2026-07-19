import React from 'react';
import Card from 'components/shared/Card/Card';
import { PoemObject, Tag } from 'dataMaps/PoemsDataMap';
import Badge from 'components/shared/Badge/Badge';
import { PoemStyles } from './Poem.style';

interface PoemProps {
    poem: PoemObject;
    showModal: () => void;
}

const Poem: React.FC<PoemProps> = ({ poem, showModal }) => {
    const { Tags, Title, Date } = PoemStyles;

    return (
        <Card onClick={showModal}>
            <>
                <Title>{poem.title}</Title>
                <Date>{poem.date}</Date>
                <Tags>
                    {poem.tags?.map((tag: Tag) => (
                        <Badge key={tag} text={tag} />
                    ))}
                </Tags>
            </>
        </Card>
    );
};

export default Poem;
