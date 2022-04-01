import React from 'react';
import Button from 'react-bootstrap/Button';
import './Cart.css'

const Cart = ({ cart, handleRemoveCart }) => {
     // Conditional rendering options
    // 1. Element variable
    // 2. ternary operator condition ? true : false   
    // 3. && Operator (shorthand)
    // 4. ||
    let command;
    if (cart.length === 0) {
        command = <div>
            <h6>Please Add One Item !!!</h6>
        </div>
    }
    else if (cart.length === 1) {
        command =<p>Add More Items Please !!!</p>
    }
    else {
        command=<p>Thanks For Adding Items !!!</p>
    }




    return (
        <div>
            <h2>Selected Item : {cart.length} </h2>
            
            {
                cart.map(tShirt => <p key={tShirt._id}>
                    {tShirt.name}
                    <Button onClick={()=>handleRemoveCart(tShirt)} variant="outline-primary">X</Button>
                </p>)
            }

            {cart.length===0 || <p className='orange'>Yaa Hoo ! Your Are Shopping !!!</p> }
            {cart.length === 3 && <div className='orange'>
            <h3>Trigonal</h3>
            <p>Tin jon ke ki gift diba</p>
            </div>}
            {command}
            {cart.length!==4 ? <p>Keep Adding</p> : <Button variant="outline-primary">Remove All</Button> }
            {cart.length ===4 && <Button variant="outline-primary">Review Order</Button> }
        </div>
    );
};

export default Cart;