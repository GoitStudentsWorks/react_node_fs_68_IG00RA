import ReactDOM from 'react-dom';
import Modal from './Modal';

const ModalContainer = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {children}
    </Modal>,
    document.getElementById('modal-root') // Make sure to have a <div id="modal-root"></div> in your HTML
  );
};

export default ModalContainer;
