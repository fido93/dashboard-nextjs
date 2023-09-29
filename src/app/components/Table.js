"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import styles from "../page.module.css";

function TableUsers() {
  const [users, setUsers] = useState([]);
  const [showEmails, setShowEmails] = useState({});
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      fetchUsers();
    }
  }, [session]);

  const fetchUsers = async () => {
    let allUsers = [];

    const response = await fetch(`https://reqres.in/api/users`);
    const data = await response.json();

    allUsers = allUsers.concat(data.data);

    const filteredUsers = allUsers.filter(
      (user) =>
        user.first_name.startsWith("G") || user.last_name.startsWith("W")
    );
    setUsers(filteredUsers);
  };

  const toggleEmail = (id) => {
    setShowEmails((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const maskEmail = (email) => {
    const [user, domain] = email.split("@");
    return `${user[0]}***@${domain}`;
  };

  return (
    <>
      {session && session.user ? (
        <div className={styles.center}>
          <div>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>
                      {showEmails[user.id] ? user.email : maskEmail(user.email)}
                    </td>
                    <td>
                      <button onClick={() => toggleEmail(user.id)}>
                        {showEmails[user.id] ? "Hide" : "Show"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default TableUsers;
