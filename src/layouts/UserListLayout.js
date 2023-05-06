import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

export default function UserListLayout() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
    <h1>Employee List</h1>
      {userList.length > 0 &&
        userList.map((val, key) => {
          return (
            <div key={key} style={{ padding: "20px 0px", width: "60%" }}>
              <UserCard
                name={val.name}
                username={val.username}
                website={val.website}
                phone={val.phone}
                email={val.email}
                id={val.id}
                companyInfo={val.company.catchPhrase}
              />
            </div>
          );
        })}
    </div>
  );
}
