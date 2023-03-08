import './App.css';
import { HomeNavBar } from './Components/HomeNavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import { RegBank } from './Components/RegBank';
import { RegUser } from './Components/RegUser';
import { RegCustomer } from './Components/RegCustomer';
import { SideBarBank } from './Components/SideBarBank';
import { Footer } from './Components/Footer';
import { UserProfile } from './Components/UserProfile';
import { EditUserProfile } from './Components/EditUserProfile';
import { SideBarUser } from './Components/SideBarUser';
import { BankProfile } from './Components/BankProfile';

function App() {
  const isLoggedIn = false;
  return (
    <div className="App">
      {/* <BrowserRouter>
        <HomeNavBar></HomeNavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/regUser" element={<RegUser></RegUser>}></Route>
          <Route path="/regBank" element={<RegBank></RegBank>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/regUser" element={<RegUser></RegUser>}></Route>
            <Route path="/regBank" element={<RegBank></RegBank>}></Route>
          </Routes>
        ) : (
          <div className='row'>
            <div className='col-3'>
              <SideBarBank />
            </div>
            <div className='col-9'>
              <Routes>
                <Route path='/profile' element={<Profile></Profile>}></Route>
                <Route path='/regCustomer' element={<RegCustomer></RegCustomer>}></Route>
              </Routes>
            </div>
          </div>
        )}

      </BrowserRouter> */}

      {/* Bank */}
      {/* <BrowserRouter>
        <div className='row m-0'>
          <div className='col-3 p-0'>
            <SideBarBank />
          </div>
          <div className='col-9'>
            <Routes>
              <Route path='/bankProfile' element={<BankProfile></BankProfile>}></Route>
              <Route path='/regCustomer' element={<RegCustomer></RegCustomer>}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter> */}

      {/* User */}
      <BrowserRouter>
        <div className='row m-0'>
          <div className='col-3 p-0'>
            <SideBarUser />
          </div>
          <div className='col-9'>
            <Routes>
              <Route path='/userProfile' element={<UserProfile></UserProfile>}></Route> 
              <Route path='/editUserProfile' element={<EditUserProfile></EditUserProfile>}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
