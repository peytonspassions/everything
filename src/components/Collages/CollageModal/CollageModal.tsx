import { CollageObject, COLLAGES, Materials } from 'dataMaps/CollagesDataMap';
import React, { useMemo } from 'react';
import { CollageModalProps } from './CollageModal.style';
import Badge from 'components/shared/Badge/Badge';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CollageModalProps {
    collageId: number;
    onArrow: (direction: 'left' | 'right') => void;
}

const CollageModal: React.FC<CollageModalProps> = ({ collageId, onArrow }) => {
    const collage = useMemo(
        () =>
            COLLAGES.find((collage: CollageObject) => collage.id === collageId),
        [collageId, COLLAGES]
    );

    const {
        Container,
        Content,
        Image,
        Details,
        Description,
        Date,
        Title,
        Materials,
        Arrow,
    } = CollageModalProps;

    if (!collage) {
        return null;
    }

    return (
        <Container>
            {COLLAGES.length > 1 && (
                <Arrow $direction="left" onClick={() => onArrow('left')}>
                    <ArrowBackIcon />
                </Arrow>
            )}
            <Content>
                <Image src={`/everything/images/collages/${collage.image}`} />
                <Details>
                    <Title>{collage.title}</Title>
                    <Date>{collage.date}</Date>
                    <Materials>
                        {collage.materials?.map(
                            (material: Materials, index: number) => (
                                <Badge
                                    key={`material_${index}`}
                                    text={material}
                                />
                            )
                        )}
                    </Materials>
                    <Description>{collage.description}</Description>
                </Details>
            </Content>
            {COLLAGES.length > 1 && (
                <Arrow $direction="right" onClick={() => onArrow('right')}>
                    <ArrowForwardIcon />
                </Arrow>
            )}
        </Container>
    );
};

export default CollageModal;
