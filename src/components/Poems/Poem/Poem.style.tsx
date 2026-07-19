import styled from 'styled-components';

const Tags = styled.div`
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
`;

const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
`;

const Date = styled.div`
    font-size: 12px;
    opacity: 0.7;
    white-space: pre-line;
    font-weight: 500;
    font-style: italic;
`;

export const PoemStyles = {
    Tags,
    Title,
    Date,
};
