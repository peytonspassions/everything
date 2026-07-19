import { CollageObject, COLLAGES } from 'dataMaps/CollagesDataMap';
import React, { useEffect, useMemo, useState } from 'react';
import Collage from './Collage/Collage';
import { CollagesStyles } from './Collages.style';
import { useModal } from 'hooks/useModal';
import CollageModal from './CollageModal/CollageModal';
import { useNavigate, useParams } from 'react-router-dom';
import { PageRoutes } from 'App';

const Collages: React.FC = () => {
    const navigate = useNavigate();
    const { Container } = CollagesStyles;
    const { ModalWindow, show, hide } = useModal();
    const [selectedCollage, setSelectedCollage] = useState<number>();
    const { collageId } = useParams();

    const collage = useMemo(
        () =>
            COLLAGES.find(
                (collage: CollageObject) => collage.id === Number(collageId)
            ),
        [collageId, COLLAGES]
    );

    const onCloseModal = () => {
        setSelectedCollage(undefined);
        navigate(`${PageRoutes.BASE}${PageRoutes.COLLAGES}`);
        hide();
    };

    useEffect(() => {
        if (collageId) {
            setSelectedCollage(Number(collageId));
            show();
        }
    }, [collageId]);

    const onClick = (collage: CollageObject) => {
        setSelectedCollage(collage.id);
        navigate(`${PageRoutes.BASE}${PageRoutes.COLLAGES}/${collage.id}`);
        show();
    };

    const onArrow = (direction: 'left' | 'right') => {
        if (COLLAGES.length < 2 || !selectedCollage) return;

        let nextCollage: CollageObject;
        const currentIndex = COLLAGES.findIndex(
            (collage: CollageObject) => collage.id === selectedCollage
        );

        if (currentIndex === -1) return;

        if (direction === 'left') {
            if (currentIndex === 0) {
                nextCollage = COLLAGES[COLLAGES.length - 1];
            } else {
                nextCollage = COLLAGES[currentIndex - 1];
            }
        } else {
            if (currentIndex === COLLAGES.length - 1) {
                nextCollage = COLLAGES[0];
            } else {
                nextCollage = COLLAGES[currentIndex + 1];
            }
        }

        navigate(`${PageRoutes.BASE}${PageRoutes.COLLAGES}/${nextCollage.id}`);
        setSelectedCollage(nextCollage.id);
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
            {collage && (
                <ModalWindow
                    onHideCallback={onCloseModal}
                    fullScreen
                    title={collage.title || 'Unknown'}
                >
                    <CollageModal collage={collage} onArrow={onArrow} />
                </ModalWindow>
            )}
        </Container>
    );
};

export default Collages;
