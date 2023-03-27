import { Route,Routes } from "react-router-dom";
import LoginPageA from "../Components/Admin/loginPageA";
import signupPageA from "../Components/Admin/signupPageA";

function AdminRouter(){
    return (
        <>
            <Routes>
                <Route path="login" element={LoginPageA}></Route>
                <Route path="signup" element={signupPageA}></Route>
            </Routes>
        </>
    )
}

export default AdminRouter;
