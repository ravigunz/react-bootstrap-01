import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      {userList.length > 0 &&
        userList.map((val, key) => {
          return (
            <div key={key}>
              <h3>
                {val.name} #{val.id}
              </h3>
              <p>{val.email}</p>
            </div>
          );
        })}
    </div>
  );
}
