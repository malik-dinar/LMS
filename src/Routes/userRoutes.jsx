
import { Route , Routes } from "react-router-dom";
import HomePage from "../Pages/User/home";
import LoginPage from "../Pages/User/login";
import SignupPage from "../Pages/User/Signup";


function UserRouter(){
    return(
        <div>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage/>} />
                <Route path="home" element={<HomePage/>} />
            </Routes> 
        </div>
    )
}

export default UserRouter;