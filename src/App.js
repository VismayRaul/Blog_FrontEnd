import logo from './logo.svg';
import './App.css';
import Navbarcomp from './components/Navbarcomp';
import Blogs from './components/Blogs';
import Contacts from './components/Contacts';
import Homepage from './components/Homepage';
import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarcomp/>
            <Routes>
                   <Route path='/home' element={<Homepage/>}></Route>
                   <Route path='/blog' element={<Blogs/>}></Route>
                   <Route path='/contact' element={<Contacts/>}></Route>
                   <Route path='/register' element={<UserRegister/>}></Route>
                   <Route path='/login' element={<UserLogin/>}></Route>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
