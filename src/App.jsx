
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import AdminRouter from './Routes/adminRoutes';
import TutorRouter from './Routes/tutorRoutes';
import UserRouter from './Routes/userRoutes';
import ErrorPAge from './Components/Common/ErrorPage';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/*' element={<ErrorPAge/>}/>
              <Route path='/admin/*' element={<AdminRouter/>}/>
              <Route path='/user/*' element={<UserRouter/>}/>
              <Route path='/tutor/*' element={<TutorRouter/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
