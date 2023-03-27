import ErrorBoundary from "../../Components/Common/ErrorBoundry";
import Login from "../../Components/User/LoginPage";


function LoginPage(){
    return(
        <ErrorBoundary>
            <Login/>
        </ErrorBoundary>
    )
}

export default LoginPage;