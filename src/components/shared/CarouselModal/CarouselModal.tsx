import React, { useMemo } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CarouselModalStyles } from './CarouselModal.style';

interface CarouselModelProps {
    itemId: number;
    onArrow: (direction: 'left' | 'right') => void;
    itemList: any[];
    children: React.ReactElement | React.ReactElement[];
}

const CarouselModal: React.FC<CarouselModelProps> = ({
    itemId,
    onArrow,
    itemList,
    children,
}) => {
    const item = useMemo(
        () => itemList.find((listItem: any) => listItem.id === itemId),
        [itemId, itemList]
    );

    const { Container, Content, Arrow } = CarouselModalStyles;

    if (!item) {
        return null;
    }

    return (
        <Container>
            {itemList.length > 1 && (
                <Arrow $direction="left" onClick={() => onArrow('left')}>
                    <ArrowBackIcon />
                </Arrow>
            )}
            <Content>{children}</Content>
            {itemList.length > 1 && (
                <Arrow $direction="right" onClick={() => onArrow('right')}>
                    <ArrowForwardIcon />
                </Arrow>
            )}
        </Container>
    );
};

export default CarouselModal;
