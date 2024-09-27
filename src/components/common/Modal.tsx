// Modal.tsx
import React from "react";
import "../../styles/components/common/Modal.css"; // Import your CSS styles for the modal
import { FaExclamationTriangle } from "react-icons/fa"; // Importing the warning icon
import { IoIosAlert } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <IoIosAlert className="warning-icon" />
        <h2>Signup Success</h2>
        <p>{message}</p>

        <button className="modal-button" onClick={onClose}>
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Modal;
