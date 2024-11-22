import { useRef } from "react";
import AddressModal from "./Addresses/AddressModal";
import PaymentCard from "./PaymentCard/PaymentCard";

const Modal = ({ onClose, itemSelected }) => {
  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modelRef}
      onClick={closeModel}
      className="fixed z-50 grid justify-center items-center bg-black inset-0 bg-opacity-30 backdrop-blur-sm "
    >
      {itemSelected === "Address" && <AddressModal onClose={onClose} />}
      {itemSelected === "Profile_Edit" && <div>Profile_Edit</div>}
      {itemSelected === "Payment_Edit" && <PaymentCard />}
      {itemSelected === "Security" && <div>Security</div>}
    </div>
  );
};

export default Modal;
