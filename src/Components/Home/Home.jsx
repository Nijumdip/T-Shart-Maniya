import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import useTShirts from "../hooks/useTShirts";
import TShirt from "../TShirt/TShirt";

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('Item all ready added');
        }
    }

    const handleRemoveCart = (selectedItem) => {  
            const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
            setCart(rest);
    }

  return (
    <div className="d-flex flex-row m-5 justify-content-between align-items-start">
          <div className="w-75">
          this is home : {tShirts.length}
        <Row xs={1} md={3} className="g-4">
          {
            tShirts.map(tShirt=><TShirt
                key={tShirt._id}
                tShirt={tShirt}
                handleAddToCart={handleAddToCart}
            ></TShirt>)
          }
        </Row>
      </div>
      <div className="w-25">
        <Cart
            handleRemoveCart={handleRemoveCart}
            cart={cart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
