import styled from 'styled-components';
import AppStyles from 'styles';

const OverlayContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgb(from ${AppStyles.colors.black} r g b / 0.5);
    overflow: auto;
`;

const ModalContainer = styled.div<{ $fullScreen?: boolean }>`
    &.modal {
        width: ${(props) => (props.$fullScreen ? 'calc(100vw - 2rem)' : '')};
        height: ${(props) => (props.$fullScreen ? 'calc(100vh - 2rem)' : '')};
        position: relative;
        border-radius: 6px;
        background-color: ${AppStyles.colors.white};
        box-shadow:
            0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);
    }
`;

const CloseIconWrapper = styled.div`
    cursor: pointer;
    color: ${AppStyles.colors.black};
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    opacity: 0.7;

    &:hover {
        transform: scale(1.1);
        opacity: 1;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    padding: 1rem;
    height: 1.75rem;
`;

export const ModalRootStyles = {
    OverlayContainer,
    Overlay,
    ModalContainer,
    CloseIconWrapper,
    Header,
};
