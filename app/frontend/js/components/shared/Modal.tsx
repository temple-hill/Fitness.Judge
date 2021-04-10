import * as React from 'react';
import { Modal } from 'react-bootstrap';
import Notification from './Notification';

interface Props {
  isOpen: boolean;
  setIsOpen?: (showable: boolean) => void;
  modalTitle?: string;
  modalSize?: 'sm' | 'lg' | 'xl';
  info?: string;
  errors?: string[];
  clearInfo?: () => void;
  clearErrors?: () => void;
  handleClear?: () => void;
  dialogClassName?: string;
}

const ModalWindow: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  modalTitle,
  modalSize,
  info,
  errors,
  clearInfo,
  clearErrors,
  handleClear,
  children,
  dialogClassName,
}) => {
  const handleClose = () => {
    setIsOpen && setIsOpen(false);
    clearErrors && clearErrors();
    clearInfo && clearInfo();
    handleClear && handleClear();
  };

  return (
    <Modal
      dialogClassName={dialogClassName}
      show={isOpen}
      onHide={handleClose}
      size={modalSize}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Notification info={info} errors={errors} />
        {!info && children}
      </Modal.Body>
    </Modal>
  );
};

export default ModalWindow;
