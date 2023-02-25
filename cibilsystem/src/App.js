import './App.css';
import { HomeNavBar } from './Components/HomeNavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import { RegBank } from './Components/RegBank';
import { RegUser } from './Components/RegUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomeNavBar></HomeNavBar>
        {/* <RegBank></RegBank> */}
        <RegUser></RegUser>
        {/* <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
