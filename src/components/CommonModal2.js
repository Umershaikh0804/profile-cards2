import React from "react";
import useConsole2 from "../hooks/useConsole2";

export default function CommonModal2({handleCloseModal, name, userEmail, mainState ,dob,phone,pictures}){
    const onClose = () => {
        handleCloseModal();
      };
        useConsole2("I am from custom hook");
      return (
        <div className="App">
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-content">
                <img src={pictures} alt="" style={{ width: "100%" }} />
              <b><p>UserName:{name}</p></b>
              <b><p>UserDOB:{dob}</p></b>
              <b><p>Phone:{phone}</p></b>
              <b><p>UserEmail:{userEmail}</p></b>
              <b><p>{mainState}</p></b>
              <button onClick={onClose}style={{direction:"top-bottom-left-right",padding:"8px 8px 8px 8px"}}className="button2">Close</button>
              </div>
            </div>
          </div>
        </div>
      );
    }