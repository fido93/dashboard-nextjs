"use client";
import { useSession } from "next-auth/react";
import { setUsersList } from "@/redux/features/getUserSlice";
import { store } from "@/redux/store";
import { Avatar, Button, Table } from "antd";
import { useState } from "react";

const TableUsers = ({ usersData, perPage, totalPage }) => {
  const [dataSource, setDataSource] = useState(usersData);
  const [showEmails, setShowEmails] = useState({});
  const totalPages = perPage;
  const recordDisplay = usersData.length;
  const { data: session } = useSession();

  const toggleEmail = (id) => {
    setShowEmails((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const maskEmail = (email) => {
    const [user, domain] = email.split("@");
    return `${user[0]}***@${domain}`;
  };

  const columns = [
    {
      title: "Profile Image",
      dataIndex: "avatar",
      render: (avatar) => <Avatar src={avatar} />,
    },
    {
      key: "first_name",
      title: "First Name",
      dataIndex: "first_name",
    },
    {
      key: "last_name",
      title: "Last Name",
      dataIndex: "last_name",
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
      render: (text, record) => {
        return showEmails[record.id] ? text : maskEmail(text);
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button onClick={() => toggleEmail(record.id)}>
          {showEmails[record.id] ? "Hide" : "Show"}
        </Button>
      ),
    },
  ];

  const fetchRecords = async (pageno) => {
    const req = await fetch(`https://reqres.in/api/users?page=${pageno}`);
    const datax = await req.json();
    store.dispatch(setUsersList(datax));
    setDataSource(store.getState().search.usersList);
  };

  return (
    <>
      {session && session.user ? (
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey="id"
          pagination={{
            pageSize: recordDisplay,
            total: totalPages,
            onChange: (page) => {
              fetchRecords(page);
            },
          }}
        ></Table>
      ) : null}
    </>
  );
};

export default TableUsers;
