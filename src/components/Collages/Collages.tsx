import { CollageObject, COLLAGES } from 'dataMaps/CollagesDataMap';
import React, { useState } from 'react';
import Collage from './Collage/Collage';
import { CollagesStyles } from './Collages.style';
import { useModal } from 'hooks/useModal';
import CollageModal from './CollageModal/CollageModal';

const Collages: React.FC = () => {
    const { Container } = CollagesStyles;
    const { ModalWindow, show, hide } = useModal();
    const [selectedCollage, setSelectedCollage] = useState<
        CollageObject | undefined
    >();

    const onClick = (collage: CollageObject) => {
        setSelectedCollage(collage);
        show();
    };

    return (
        <Container>
            {COLLAGES.map((collage: CollageObject, index: number) => (
                <Collage
                    showModal={() => onClick(collage)}
                    collage={collage}
                    key={`collage_${index}`}
                />
            ))}
            {selectedCollage && (
                <ModalWindow
                    onHideCallback={hide}
                    fullScreen
                    title={'Collage Details'}
                >
                    <CollageModal collage={selectedCollage} />
                </ModalWindow>
            )}
        </Container>
    );
};

export default Collages;
