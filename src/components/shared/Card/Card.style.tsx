import styled from 'styled-components';

export const CardContainer = styled.div`
    cursor: pointer;
    padding: 1rem;
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
