import { CollageObject } from 'dataMaps/CollagesDataMap';
import React from 'react';
import { CollageStyles } from './Collage.style';
import Card from 'components/shared/Card/Card';

interface CollageProps {
    collage: CollageObject;
    showModal: () => void;
}

const Collage: React.FC<CollageProps> = ({ collage, showModal }) => {
    const { ImageContainer, Image, Title } = CollageStyles;

    return (
        <Card onClick={showModal}>
            <>
                <Title>{collage.title}</Title>
                <ImageContainer>
                    <Image
                        src={`/everything/images/collages/${collage.image}`}
                    />
                </ImageContainer>
            </>
        </Card>
    );
};

export default Collage;
