import styled from 'styled-components';
import AppStyles from 'styles';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 5.95rem);
    padding: 1rem;
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

const Image = styled.img`
    border-radius: 6px;
    border: 1px solid ${AppStyles.colors.black};
    max-height: 100%;
    object-fit: contain;
    display: flex;
    justify-content: center;
    height: min-content;
    max-width: 50%;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Description = styled.div`
    font-size: 12px;
    font-weight: 300;
    opacity: 0.7;
    white-space: pre-line;
`;

const Date = styled(Description)`
    font-weight: 500;
    font-style: italic;
`;

const Title = styled(Description)`
    font-weight: 500;
    font-size: 18px;
`;

export const CollageModalProps = {
    Container,
    Content,
    Image,
    Details,
    Description,
    Date,
    Title,
};
