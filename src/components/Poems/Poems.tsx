import React, { useEffect, useMemo, useState } from 'react';
import { useModal } from 'hooks/useModal';
import { useNavigate, useParams } from 'react-router-dom';
import { PageRoutes } from 'App';
import { PoemsStyles } from './Poems.style';
import { PoemObject, POEMS } from 'dataMaps/PoemsDataMap';
import Poem from './Poem/Poem';
import PoemModal from './PoemModal/PoemModal';

const Poems: React.FC = () => {
    const navigate = useNavigate();
    const { Container } = PoemsStyles;
    const { ModalWindow, show, hide } = useModal();
    const [selectedPoem, setSelectedPoem] = useState<number>();
    const { poemId } = useParams();

    const poem = useMemo(
        () => POEMS.find((poem: PoemObject) => poem.id === Number(poemId)),
        [poemId, POEMS]
    );

    const onCloseModal = () => {
        setSelectedPoem(undefined);
        navigate(`${PageRoutes.BASE}${PageRoutes.POEMS}`);
        hide();
    };

    useEffect(() => {
        if (poemId) {
            setSelectedPoem(Number(poemId));
            show();
        }
    }, [poemId]);

    const onClick = (poem: PoemObject) => {
        setSelectedPoem(poem.id);
        navigate(`${PageRoutes.BASE}${PageRoutes.POEMS}/${poem.id}`);
        show();
    };

    const onArrow = (direction: 'left' | 'right') => {
        if (POEMS.length < 2 || !selectedPoem) return;

        let nextPoem: PoemObject;
        const currentIndex = POEMS.findIndex(
            (poem: PoemObject) => poem.id === selectedPoem
        );

        if (currentIndex === -1) return;

        if (direction === 'left') {
            if (currentIndex === 0) {
                nextPoem = POEMS[POEMS.length - 1];
            } else {
                nextPoem = POEMS[currentIndex - 1];
            }
        } else {
            if (currentIndex === POEMS.length - 1) {
                nextPoem = POEMS[0];
            } else {
                nextPoem = POEMS[currentIndex + 1];
            }
        }

        navigate(`${PageRoutes.BASE}${PageRoutes.POEMS}/${nextPoem.id}`);
        setSelectedPoem(nextPoem.id);
    };

    return (
        <Container>
            {POEMS.map((poem: PoemObject, index: number) => (
                <Poem
                    key={`poem_${index}`}
                    poem={poem}
                    showModal={() => onClick(poem)}
                />
            ))}
            {poem && (
                <ModalWindow
                    onHideCallback={onCloseModal}
                    fullScreen
                    title={poem.title || 'Unknown'}
                >
                    <PoemModal poem={poem} onArrow={onArrow} />
                </ModalWindow>
            )}
        </Container>
    );
};

export default Poems;
