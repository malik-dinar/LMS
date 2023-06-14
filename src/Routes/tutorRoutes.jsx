import { Route, Routes } from "react-router-dom";
import HomePageTutor from "../pages/Tutor/Home"
import LoginTutorPage from "../pages/Tutor/loginTutor";
import SignupTutorPage from "../pages/Tutor/SignupTutor";
import Course from "../pages/Tutor/Course";
import AddVideo from "../pages/Tutor/AddVideo";
// import { PrivateTutor } from "../components/common/PrivateComponent";
import ChatPage from "../pages/user/ChatPage";
import { PrivateTutor } from "../Components/Common/PrivateComponent";
import ListCoursePage from "../Pages/Tutor/ListCoursePage";

function TutorRouter() {
  return (
    <>
      <Routes>
        <Route element={<PrivateTutor />}>
          <Route path="course" element={<Course />}></Route>
          <Route path="list-course" element={<ListCoursePage />}></Route>
          <Route path="video" element={<AddVideo />}></Route>
          <Route path="chat" element={<ChatPage user={"tutor"} />} />
        </Route>
        <Route path="login" element={<LoginTutorPage />}></Route>
        <Route path="signup" element={<SignupTutorPage />}></Route>
        <Route path="home" element={<HomePageTutor />}></Route>
      </Routes>
    </>
  );
}

export default TutorRouter;
