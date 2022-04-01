import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

/**
 * context api
 * 1. call createContext with a default value
 * 2. set a variable of the context with uppercase
 * 3. Make sure you export the context to use it in other places
 * 4. Wrap you child content using RingContext.Provider
 * 5. Provide a value
 * 6. to consume the context from child component
 * 7. useContext hook and you will you need to pass the contextName
 *  */


export const RingContext = createContext('ring');

const Grandpa = () => {
  const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring';
    
  const handleBuyAHouse = () => {
    setHouse(house + 1);
  };

  return (
    <RingContext.Provider value={[house, setHouse]} >
      <div className="rounded m-5 p-5 border">
        <h3>Grand Pa</h3>
        <Button onClick={handleBuyAHouse} variant="outline-primary">
          Buy a House
        </Button>
        <p>House : {house} </p>

        <div className=" rounded p-4 border d-flex flex-row justify-content-center align-items-center ">
          <Row xs={1} md={3} className="g-4">
            <Col>
              <div className="border rounded ">
                <Father house={house}></Father>
              </div>
            </Col>
            <Col>
              <div className="border rounded">
                <Uncle house={house}></Uncle>
              </div>
            </Col>
            <Col>
              <div className="border rounded">
                <Aunty house={house}></Aunty>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
