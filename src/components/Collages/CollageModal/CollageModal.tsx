import { CollageObject } from 'dataMaps/CollagesDataMap';
import React from 'react';
import { CollageModalProps } from './CollageModal.style';

interface CollageModalProps {
    collage: CollageObject;
}

const CollageModal: React.FC<CollageModalProps> = ({ collage }) => {
    const { Container, Content, Image, Details, Description, Date, Title } =
        CollageModalProps;

    return (
        <Container>
            <Content>
                <Image src={`/everything/images/collages/${collage.image}`} />
                <Details>
                    <Title>{collage.title}</Title>
                    <Date>{collage.date}</Date>
                    <Description>{collage.description}</Description>
                </Details>
            </Content>
        </Container>
    );
};

export default CollageModal;
