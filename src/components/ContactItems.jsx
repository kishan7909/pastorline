import React, { useState } from "react";
import {
  Button,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const ContactItems = ({ item }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenDetailModal = () => {
    setIsOpenModal(true);
  };

  const toggleNested = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <ListGroupItem action tag="button" onClick={handleOpenDetailModal}>
        <ul>
          <li>ID: {item.id}</li>
          <li>First Name: {item.first_name ? item.first_name : "N/A"}</li>
          <li>Last Name: {item.last_name ? item.last_name : "N/A"}</li>
          <li>Country : {item.country.iso ? item.country.iso : "N/A"}</li>
        </ul>
      </ListGroupItem>
      <Modal isOpen={isOpenModal} toggle={toggleNested} onClosed={undefined}>
        <ModalHeader>Modal C</ModalHeader>
        <ModalBody>
          <ul>
            <li>ID: {item.id}</li>
            <li>Email: {item.email ? item.email : "N/A"}</li>
            <li>First Name: {item.first_name ? item.first_name : "N/A"}</li>
            <li>Last Name: {item.last_name ? item.last_name : "N/A"}</li>
            <li>Phone No: {item.phone_number ? item.phone_number : "N/A"}</li>
            <li>Country : {item.country.iso ? item.country.iso : "N/A"}</li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggleNested}>Close</Button>{" "}
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ContactItems;
