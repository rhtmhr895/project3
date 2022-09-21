
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import UserLoginD from './context/Userdata/UserLoginD';
import Navbar from'./components/Navbar';
import Home from'./pages/home';
import Login from'./pages/Login';
import Register from './pages/Register';
import Tshirts from './pages/Tshirts';
import Footer from './components/footer';
import Images from '../src/components/Images';
import Carousel from '../src/components/carousel';
function App() {

  // console.log(Images[0]);
  return (
    
    <div className="App">
    <Router>
    <Navbar/>
    <Carousel images={Images}></Carousel>
    <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/tshirts" element={< Tshirts/>}/>
    </Routes>
    <Footer/>
    </Router>
   
    </div>
  );
}

export default App;
