import Modal from 'components/shared/ModalRoot/ModalRoot';
import React, { useState } from 'react';

interface ModalProps {
    children: React.ReactElement;
    onHideCallback?: () => void;
    fullScreen?: boolean;
    title?: string;
}

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const show = () => {
        setIsOpen(true);
    };

    const hide = (callback?: () => void) => {
        setIsOpen(false);
        callback?.();
    };

    const ModalWindow = ({
        onHideCallback,
        children,
        fullScreen,
        title,
    }: ModalProps) => (
        <React.Fragment>
            {isOpen && (
                <Modal
                    closeModal={() => hide(onHideCallback)}
                    fullScreen={fullScreen}
                    title={title}
                >
                    {children}
                </Modal>
            )}
        </React.Fragment>
    );

    return { show, hide, ModalWindow };
};
