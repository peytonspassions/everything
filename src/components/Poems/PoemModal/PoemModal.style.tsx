import styled from 'styled-components';
import AppStyles from 'styles';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 300px;

    @media only screen and (max-width: 700px) {
        width: 100%;
    }
`;

const PoemBody = styled.div`
    font-size: 12px;
    font-weight: 300;
    opacity: 0.7;
    white-space: pre-line;
    padding-bottom: 1rem;
`;

const Date = styled(PoemBody)`
    font-weight: 500;
    font-style: italic;
    padding-bottom: 0;
`;

const Tags = styled.div`
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgb(from ${AppStyles.colors.black} r g b / 0.3);
    margin-bottom: 0.5rem;
`;

export const PoemModalStyles = {
    Content,
    PoemBody,
    Date,
    Tags,
};
