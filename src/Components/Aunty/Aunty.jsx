import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import Button from "react-bootstrap/Button";

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const handleHouseIncrease = () => {
        setHouse(house + 1);
    }
    return (
        <div>
            <h4>Aunty is sooo CUTE !!!</h4>
            <p>House : {house} </p>
            <Button className='m-1' onClick={handleHouseIncrease} variant="outline-primary">Buy a House</Button>
        </div>
    );
};

export default Aunty;