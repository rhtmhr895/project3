
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import UserLoginD from './context/Userdata/UserLoginD';
import Navbar from'./components/Navbar';
import Home from'./pages/home';
import Login from'./pages/Login';
import Register from './pages/Register';
// import Tshirts from './pages/Tshirts';
import Footer from './components/footer';
import GetProducts from './pages/GetProducts';

function App() {

  // console.log(Images[0]);
  return (
    
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/getproducts" element={< GetProducts/>}/>
    </Routes>
    <Footer/>
    </Router>
   
    </div>
  );
}

export default App;
