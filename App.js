import './App.css';
import { HomeNavBar } from './Components/HomeNavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegUser from './Components/RegUser';
import {SideBarUser} from './Components/SideBarUser';
import {Profile} from './Components/Profile';
import { EditProfile } from './Components/EditProfile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='row m-0'>
          <div className='col-3 p-0'>
            <SideBarUser />
          </div>
          <div className='col-9'>
            <Routes>
              <Route path='/profile' element={<Profile></Profile>}></Route> 
              <Route path='/editProfile' element={<EditProfile></EditProfile>}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      {/* <BrowserRouter>
        <HomeNavBar></HomeNavBar>
        <RegUser></RegUser>
        <user></user>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
         <Route path="/about" element={<About></About>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes> 
      </BrowserRouter> */}
    </div>

  );
}

export default App;