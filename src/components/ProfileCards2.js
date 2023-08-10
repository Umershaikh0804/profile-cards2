import React, { useState } from "react";
import CommonCards2 from "./CommonCards2";
import useFetchApi2 from "../hooks/useFetchApi2";

export default function ProfileCards2({ mainState }) {
  const [data] = useFetchApi2("https://randomuser.me/api/?results=50");
  const [searchData, setSearchData] = useState("");

  const onSearchChange = (event) => {
    console.log(event.target.value);
    setSearchData(event.target.value);
  };

  const filteredUserList = data.results?.filter((user) => {
    return user.name.first.toLowerCase().includes(searchData.toLowerCase());
  });

 console.log(filteredUserList);
 //console.log(data);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search User Name"
          style={{
            height: "35px",
            width: "20%",
            borderRadius: "8px",
            border: "2px solid #666666",
          }}
          onChange={onSearchChange}
        />
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "15px" }}
      >
        {filteredUserList &&
          filteredUserList?.map((item, ind) => {
            return (
              <CommonCards2
                userEmail={item.email}
                mainState={mainState}
                name={item.name.first}
                pictures={item.picture.large}
                dob={item.dob.date}
                phone={item.phone}
              />
            );
          })}
      </div>
    </>
  );
}
