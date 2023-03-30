import { Route,Routes } from "react-router-dom";
import AddCategoryPage from "../Pages/Admin/AddCategory";
import AdminDashBoard from "../Pages/Admin/AdminDashboard";
import LoginAdminPage from "../Pages/Admin/LoginAdmin";
import TutorManagement from "../Pages/Admin/TutorManagement";
import UserManagement from "../Pages/Admin/UserManagement";

function AdminRouter(){
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginAdminPage/>}></Route>
                <Route path="dashboard" element={<AdminDashBoard/>}></Route>
                <Route path="user-management" element={<UserManagement/>}></Route>
                <Route path="tutor-management" element={<TutorManagement/>}></Route>
                <Route path="add-category" element={<AddCategoryPage/>}></Route>
            </Routes>
        </>
    )
}

export default AdminRouter;
