import styled from 'styled-components';
import AppStyles from 'styles';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 4.95rem);
    padding: 0 1rem 1rem;
    overflow: auto;
`;

const Content = styled.div`
    display: flex;
    height: 100%;
    gap: 2rem;

    @media only screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Arrow = styled.div<{ $direction: 'left' | 'right' }>`
    position: fixed;
    top: 50%;
    ${({ $direction }) =>
        $direction === 'left'
            ? `
        left: 0.5rem;
    `
            : `
        right: 0.5rem;
    `}

    background-color: rgb(from ${AppStyles.colors.white} r g b / 0.5);
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

export const CarouselModalStyles = {
    Container,
    Content,
    Arrow,
};
