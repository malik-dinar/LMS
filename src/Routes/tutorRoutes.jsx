import { Route,Routes } from "react-router-dom";
import HomePageTutor from "../Pages/Tutor/Home";
import LoginTutorPage from "../Pages/Tutor/loginTutor";
import SignupTutorPage from "../Pages/Tutor/SignupTutor";

function TutorRouter(){
    return(
        <>
            <Routes>
                <Route path="login" element={<LoginTutorPage/>}></Route>
                <Route path="signup" element={<SignupTutorPage/>}></Route>
                <Route path="home" element={<HomePageTutor/>}></Route>
            </Routes>
        </>
    )
}

export default TutorRouter;