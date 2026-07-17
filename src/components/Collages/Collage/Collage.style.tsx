import styled from 'styled-components';
import AppStyles from 'styles';

const Card = styled.div`
    cursor: pointer;
    height: 100%;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid rgb(0 0 0 / 0.1);
    box-shadow:
        0 1px 3px 0 rgb(0 0 0 / 0.1),
        0 1px 2px -1px rgb(0 0 0 / 0.1);

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.01);
    }
`;

const ImageContainer = styled.div`
    height: 300px;
    object-fit: contain;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    border-radius: 6px;
    border: 1px solid ${AppStyles.colors.black};
`;

const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`;

export const CollageStyles = {
    Card,
    ImageContainer,
    Image,
    Title,
};
