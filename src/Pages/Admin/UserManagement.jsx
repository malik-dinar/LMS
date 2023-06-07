import UserManagementPage from "../../components/admin/UserManagement";
import DefaultLayout from "../../components/admin/DefaultLayout";
import React from "react";

function UserManagement() {
  return (
    <DefaultLayout>
      <UserManagementPage />
    </DefaultLayout>
  );
}

export default UserManagement;
