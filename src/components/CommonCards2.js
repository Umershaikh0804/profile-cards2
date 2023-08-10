import React, { useState } from "react";
import CommonModal2 from "./CommonModal2";

export default function CommonCards2({  name, userEmail,mainState,dob,phone,pictures }){
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    {isModalOpen === true ? (
      <CommonModal2
       handleCloseModal={handleCloseModal}
       name={name}
       userEmail={userEmail}
       dob={dob}
       mainState={mainState}
       phone={phone}
       pictures={pictures}
       />
    ) : null}
      <div className="card"
        style={{
          borderRadius: "15%",
          width: "20%",
          height: "370px",
        }}
      >
        <div>
          <img
            src={pictures}
            alt=""
            style={{ width: "100%",borderRadius:"40px" }}
          />
        </div>
        <div style={{fontFamily:"inherit"}}>{name}</div>
        <div style={{fontFamily:"inherit"}}>{userEmail}</div>
        <button onClick={handleOpenModal} style={{direction:"top-bottom-left-right",padding:"10px 10px 10px 10px",borderRadius:"10px",fontFamily:"cursive"}}className="button">Show details</button>
      </div>
    </>
  );
}