import React from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import { ModalRootStyles } from './ModalRoot.style';

export const MODAL_FULLSCREEN_THRESHOLD = 700;

type Props = {
    children: React.ReactElement;
    closeModal?: () => void;
    fullScreen?: boolean;
    title?: string;
};

const Modal = React.memo(
    ({ children, closeModal, fullScreen, title }: Props) => {
        const domEl = document.getElementById('modal-root');

        if (!domEl) return null;

        const {
            OverlayContainer,
            Overlay,
            ModalContainer,
            CloseIconWrapper,
            Header,
        } = ModalRootStyles;

        return ReactDOM.createPortal(
            <OverlayContainer onClick={(event) => event.stopPropagation()}>
                <Overlay onClick={closeModal} />
                <ModalContainer className={'modal'} $fullScreen={fullScreen}>
                    <Header>
                        {title ?? <div />}
                        <CloseIconWrapper className={'close-icon'}>
                            <CloseIcon onClick={closeModal} />
                        </CloseIconWrapper>
                    </Header>
                    {children}
                </ModalContainer>
            </OverlayContainer>,
            domEl
        );
    }
);

export default Modal;
