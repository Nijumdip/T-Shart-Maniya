import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = ({house}) => {
  return (
    <div>
      <h2>My Father is Super Hero !!!</h2>
      <p>House : {house} </p>
      <div className=" border p-1 m-2 rounded d-flex flex-row justify-content-center align-items-center">
        <div className='border rounded m-1'>
          <Myself house={house}></Myself>
        </div>
        <div className='border rounded m-1'>
          <Brother house={house}></Brother>
        </div>
        <div className='border rounded m-1'>
          <Sister house={house}></Sister>
        </div>
      </div>
    </div>
  );
};

export default Father;
