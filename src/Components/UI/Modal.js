import React from "react";
import "./Modal.scss";

const Modal = ({ onClose, children }) => {
  return (
    <div onClick={onClose} className="modal">
      {children}
    </div>
  );
};

export default Modal;
