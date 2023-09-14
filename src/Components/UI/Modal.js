import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center items-center z-20">
      {children}
    </div>
  );
};

export default Modal;
