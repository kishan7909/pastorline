import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  Input,
  Form,
  CardFooter,
  FormGroup,
  Label,
} from "reactstrap";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetContacts } from "../redux/contacts/actions";
import { Scrollbars } from "react-custom-scrollbars";
import InfiniteScroll from "react-infinite-scroll-component";
import ContactItems from "../components/ContactItems";
import ModalButtons from "../components/ModalButtons";

const Modal2 = () => {
  const listInnerRef = useRef();
  const navigation = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [companyId, setCompanyId] = useState(171);
  const [countryId, setCountryId] = useState(226);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(true);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [contactsList, setContactsList] = useState([]);
  const [filterContactList, setFilterContactList] = useState([]);
  const { contacts, contactsLoading, totalContacts } = useSelector(
    (state) => state.contacts
  );

  useEffect(() => {
    setContactsList([...contactsList, ...contacts]);
  }, [contacts]);

  useEffect(() => {
    handleFilterData(contactsList);
  }, [contactsList]);

  const toggle = () => {
    setModal(!modal);
    navigation("/");
  };

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  useEffect(() => {
    setContactsList([]);
    dispatch(GetContacts(companyId, page, countryId, search));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactsList([]);
    dispatch(GetContacts(companyId, 1, countryId, search));
    setPage(1);
  };

  const onScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e;
    if (scrollTop + clientHeight === scrollHeight) {
      dispatch(GetContacts(companyId, page + 1, countryId, search));
      setPage(page + 1);
    }
  };

  const handleFilterData = (contactsList, isChecked = false) => {
    if (isChecked || isCheckboxChecked) {
      let filterData = contactsList.filter((item) => item.id % 2 == 0);
      setFilterContactList(filterData);
    }
  };

  const handleChangeCheckbox = (e) => {
    handleFilterData(contactsList, e.target.checked);
    setIsCheckboxChecked(e.target.checked);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} backdrop="static" size="lg">
        <ModalHeader toggle={toggle} close={closeBtn}>
          Modal B
        </ModalHeader>
        <ModalBody>
          <ModalButtons />
          <div className="contact-list-wrapper">
            <Card>
              <CardBody>
                <Form className="mb-3" onSubmit={handleSubmit}>
                  <Input
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Form>
                <Scrollbars
                  style={{ height: 500 }}
                  onScrollFrame={onScroll}
                  ref={listInnerRef}
                >
                  <ListGroup numbered={true} flush={true}>
                    {!isCheckboxChecked
                      ? contactsList?.map((item, i) => (
                          <ContactItems item={item} key={i} index={i} />
                        ))
                      : filterContactList?.map((item, i) => (
                          <ContactItems item={item} key={i} index={i} />
                        ))}
                    {contactsLoading && (
                      <ListGroupItem
                        key={"loading"}
                        className="d-flex justify-content-center"
                      >
                        Loading...
                      </ListGroupItem>
                    )}
                  </ListGroup>
                </Scrollbars>
              </CardBody>
              <CardFooter>
                <FormGroup check>
                  <Input
                    type="checkbox"
                    checked={isCheckboxChecked}
                    onChange={handleChangeCheckbox}
                  />{" "}
                  <Label check={isCheckboxChecked}>Only even</Label>
                </FormGroup>
              </CardFooter>
            </Card>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Modal2;
