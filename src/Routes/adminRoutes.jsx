import { Route, Routes } from "react-router-dom";
import AddCategoryPage from "../Pages/Admin/AddCategory";
import AdminDashBoard from "../Pages/Admin/AdminDashboard";
import LoginAdminPage from "../pages/admin/LoginAdmin";
import TutorManagement from "../Pages/Admin/TutorManagement";
import UserManagement from "../Pages/Admin/UserManagement";
import ListCoursePage from "../pages/admin/ListCoursePage";
import Report from "../pages/admin/Reports";
import { PrivateAdmin } from "../Components/Common/PrivateComponent";

function AdminRouter() {
  return (
    <>
      <Routes>
        <Route element={<PrivateAdmin />}>
          <Route path="dashboard" element={<AdminDashBoard />}></Route>
          <Route path="user-management" element={<UserManagement />}></Route>
          <Route path="tutor-management" element={<TutorManagement />}></Route>
          <Route path="add-category" element={<AddCategoryPage />}></Route>
          <Route path="courses" element={<ListCoursePage />}></Route>
          <Route path="reports" element={<Report />}></Route>
        </Route>
        <Route path="login" element={<LoginAdminPage />}></Route>
      </Routes>
    </>
  );
}

export default AdminRouter;
