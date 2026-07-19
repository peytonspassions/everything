import styled from 'styled-components';
import AppStyles from 'styles';

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
    ImageContainer,
    Image,
    Title,
};
