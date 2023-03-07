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
import { Profile } from './Components/Profile';
import { Footer } from './Components/Footer';

function App() {
  const isLoggedIn = false;
  return (
    <div className="App">
    {/* <RegBank1></RegBank1> */}
      <BrowserRouter>
        <HomeNavBar></HomeNavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/regUser" element={<RegUser></RegUser>}></Route>
          <Route path="/regBank" element={<RegBank></RegBank>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

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

      {/* <BrowserRouter>
        <div className='row m-0'>
          <div className='col-3 p-0'>
            <SideBarBank />
          </div>
          <div className='col-9'>
            <Routes>
              <Route path='/profile' element={<Profile></Profile>}></Route>
              <Route path='/regCustomer' element={<RegCustomer></RegCustomer>}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter> */}


    </div>
  );
}

export default App;
