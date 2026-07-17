import styled from 'styled-components';
import AppStyles from 'styles';

const ACCENT = AppStyles.colors.white;
const BACKGROUND = AppStyles.colors.purple;

const HeaderContainer = styled.div`
    background-color: rgb(from ${BACKGROUND} r g b / 0.5);

    width: 2.5rem;
    height: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
    transition: all 0.3s ease-in-out;
    box-shadow:
        0 1px 3px 0 rgb(0 0 0 / 0.1),
        0 1px 2px -1px rgb(0 0 0 / 0.1);

    &:hover {
        width: 20rem;

        .text {
            display: flex;
        }
    }
`;

const Tab = styled.div<{ $isCurrent: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 4px 10px;
    align-items: center;
    position: relative;
    cursor: pointer;
    gap: 0.25rem;
    box-shadow:
        0 1px 3px 0 rgb(0 0 0 / 0.1),
        0 1px 2px -1px rgb(0 0 0 / 0.1);

    background-color: ${(props) => (props.$isCurrent ? ACCENT : BACKGROUND)};
    border-radius: 20px;
    opacity: ${(props) => (props.$isCurrent ? 1 : 0.7)};
    transition: all 0.3s ease-in-out;
    overflow: hidden;

    &:hover {
        opacity: 1;

        .text {
            font-weight: 500;
        }
    }
`;

const Icon = styled.div<{ $isCurrent: boolean }>`
    flex-shrink: 0;
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    color: ${(props) => (props.$isCurrent ? BACKGROUND : ACCENT)};

    svg {
        width: 1.3rem;
        height: 1.3rem;
    }
`;

const Text = styled.div<{ $isCurrent: boolean }>`
    display: flex;
    transition: all 0.3s ease-in-out;
    text-transform: lowercase;
    letter-spacing: 2px;
    color: ${(props) => (props.$isCurrent ? BACKGROUND : ACCENT)};
    font-weight: 200;
`;

export const HeaderStyles = {
    HeaderContainer,
    Tab,
    Icon,
    Text,
};
