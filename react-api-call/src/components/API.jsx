import React, { useEffect, useState } from "react";

export default function API() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>
        {users.map((user) => <li>{user.name}</li> )}
      </h2>
    </div>
  );
}
