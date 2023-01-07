import React from "react";
import { Button, Container } from "reactstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Container className="h-100">
        <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <Button
            className="btn-modal-a m-1"
            tag={Link}
            to="modal1"
            state={{ background: location }}
          >
            Modal A
          </Button>
          <Button
            className="btn-modal-b m-2"
            tag={Link}
            to="modal2"
            state={{ background: location }}
          >
            Modal B
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Home;
