/* eslint-disable react/prop-types */
import "./Modal.css";

const Modal = ({ children }) => {
  return (
    <div className="nav-modal-click">
      <div className="">{children}</div>
    </div>
  );
};
export default Modal;
