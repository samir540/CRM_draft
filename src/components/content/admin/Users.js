import { useState } from "react";
import { userTableConfig } from "../../../config/admin-table";
import users from "../../../data/admin/users";

import AdminTable from "../../ui/AdminTable";

import UserEntryModal from "./UserEntryModal";

function Users() {
  const [userList, setUserList] = useState(users);

  const addUser = (user) => {
    setUserList((prev) => [{ ...user, key: user.fullName }, ...prev]);
  };

  const editUser = (key) => {
    const editedUser = userList.find(user => user.key === key);
    setUserList(prev => [...prev.filter(user => user.key !== key), {...editedUser, isActive: !editedUser.isActive}])
  };

  return (
    <div className="users-page">
      <h1 className="page-title">All Users</h1>
      <UserEntryModal onAddUser={addUser} />
      <AdminTable data={userList} config={userTableConfig} onEditUser={editUser} />
    </div>
  );
}

export default Users;
