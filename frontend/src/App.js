
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import UserLoginD from './context/Userdata/UserLoginD';
import Navbar from'./components/Navbar';
import Home from'./components/home';
import Login from'./components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
    </Routes>
    </Router>
  
    </div>
  );
}

export default App;
