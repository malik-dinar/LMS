
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import TutorRouter from './Routes/tutorRoutes';
import UserRouter from './Routes/userRoutes';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/admin/*'/>
              <Route path='/user/*' element={<UserRouter/>}/>
              <Route path='/tutor/*' element={<TutorRouter/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
