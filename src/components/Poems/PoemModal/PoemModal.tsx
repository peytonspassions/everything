import React, { useMemo } from 'react';
import Badge from 'components/shared/Badge/Badge';
import CarouselModal from 'components/shared/CarouselModal/CarouselModal';
import { PoemObject, POEMS, Tag } from 'dataMaps/PoemsDataMap';
import { PoemModalStyles } from './PoemModal.style';

interface PoemModalProps {
    poem: PoemObject;
    onArrow: (direction: 'left' | 'right') => void;
}

const PoemModal: React.FC<PoemModalProps> = ({ poem, onArrow }) => {
    const { Content, PoemBody, Date, Tags } = PoemModalStyles;

    if (!poem) {
        return null;
    }

    return (
        <CarouselModal itemId={poem.id} itemList={POEMS} onArrow={onArrow}>
            <Content>
                <Date>{poem.date}</Date>
                <Tags>
                    {poem.tags?.map((tag: Tag, index: number) => (
                        <Badge key={`tag_${index}`} text={tag} />
                    ))}
                </Tags>
                <PoemBody>{poem.poem}</PoemBody>
            </Content>
        </CarouselModal>
    );
};

export default PoemModal;
