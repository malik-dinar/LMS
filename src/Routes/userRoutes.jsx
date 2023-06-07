import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/User/home";
import LoginPage from "../Pages/User/Login";
import SignupPage from "../Pages/User/Signup";
import ListCourseUserPage from "../Pages/User/ListCourseUserPage";
import VideoPlayerPage from "../Pages/User/VideoPlayerPage";
import { PrivateUser } from "../Components/Common/PrivateComponent";
import ChatPage from "../pages/user/ChatPage";

function UserRouter() {
  return (
    <>
      <Routes>
        <Route element={<PrivateUser />}>
          <Route path="course" element={<ListCourseUserPage />} />
          <Route path="videos" element={<VideoPlayerPage />} />
          <Route path="chat" element={<ChatPage  user={"student"}></ChatPage>} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="home" element={<HomePage />} />  
      </Routes> 
    </>
  );
}

export default UserRouter;
