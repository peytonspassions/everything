import { CollageObject, COLLAGES, Materials } from 'dataMaps/CollagesDataMap';
import React, { useMemo } from 'react';
import { CollageModalStyles } from './CollageModal.style';
import Badge from 'components/shared/Badge/Badge';
import CarouselModal from 'components/shared/CarouselModal/CarouselModal';

interface CollageModalProps {
    collage: CollageObject;
    onArrow: (direction: 'left' | 'right') => void;
}

const CollageModal: React.FC<CollageModalProps> = ({ collage, onArrow }) => {
    const { Image, Details, Description, Date, Materials } = CollageModalStyles;

    if (!collage) {
        return null;
    }

    return (
        <CarouselModal
            itemId={collage.id}
            itemList={COLLAGES}
            onArrow={onArrow}
        >
            <Details>
                <Date>{collage.date}</Date>
                <Materials>
                    {collage.materials?.map(
                        (material: Materials, index: number) => (
                            <Badge key={`material_${index}`} text={material} />
                        )
                    )}
                </Materials>
                <Description>{collage.description}</Description>
            </Details>
            <Image src={`/everything/images/collages/${collage.image}`} />
        </CarouselModal>
    );
};

export default CollageModal;
