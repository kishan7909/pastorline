import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

const CustomModal = ({ children, title = "Modal1", ...props }) => {
  const { className } = props;
  const [modal, setModal] = useState(true);
  const navigation = useNavigate();
  const location = useLocation();

  const toggle = () => {
    setModal(!modal);
    navigation("/");
  };

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        backdrop="static"
      >
        <ModalHeader toggle={toggle} close={closeBtn}>
          {title}
        </ModalHeader>
        {children}
      </Modal>
    </div>
  );
};

export default CustomModal;
