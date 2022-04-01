import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import Button from "react-bootstrap/Button";

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h6>Special One</h6>
            <small>Gift:{house}</small>
            <Button onClick={()=>setHouse(house+1)} variant="outline-primary">Buy a House</Button>
        </div>
    );
};

export default Special;