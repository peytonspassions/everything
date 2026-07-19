import styled from 'styled-components';
import AppStyles from 'styles';

const Image = styled.img`
    border-radius: 6px;
    border: 1px solid ${AppStyles.colors.black};
    max-height: 100%;
    object-fit: contain;
    display: flex;
    justify-content: center;
    height: min-content;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 300px;
    overflow: auto;
    padding-bottom: 1rem;

    @media only screen and (max-width: 700px) {
        width: 100%;
    }
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

const Materials = styled.div`
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
`;

export const CollageModalStyles = {
    Image,
    Details,
    Description,
    Date,
    Materials,
};
