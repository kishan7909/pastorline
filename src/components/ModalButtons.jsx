import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";

const ModalButtons = () => {
  const location = useLocation();
  return (
    <>
      <Button
        className="btn-modal-a m-1"
        tag={Link}
        to="/modal1"
        state={{ background: location }}
      >
        All Contacts
      </Button>
      <Button
        className="btn-modal-b m-1"
        tag={Link}
        to="/modal2"
        state={{ background: location }}
      >
        US Contacts
      </Button>
      <Button
        className="btn-modal-c m-1"
        tag={Link}
        to="/"
        state={{ background: location }}
      >
        Close
      </Button>
    </>
  );
};

export default ModalButtons;
