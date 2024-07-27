import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [listofusers, setlistofusers] = useState([]);
  // first method
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => setlistofusers(res.data))
  //       .catch((err) => console.error(err));
  //   }, []); //mount
  //second method
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setlistofusers(res.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {listofusers.map((user, index) => (
        <div key={index}>
          <h1 className="title1">id:{user.id}</h1>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
