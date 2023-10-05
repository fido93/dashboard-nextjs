import React from "react";
import TableUsers from "./Table";
import { store } from "@/redux/store";

const WrapperTable = () => {
  return (
    <TableUsers
      usersData={store.getState().search.usersList}
      perPage={store.getState().search.per_page}
      totalPage={store.getState().search.total}
    />
  );
};

export default WrapperTable;
