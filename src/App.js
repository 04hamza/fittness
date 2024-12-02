import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Footer from './footer/Footer';
function App() {
  return (
       <>
          <Footer/>
       </>
    
=======
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home/home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
>>>>>>> 828e39b2a3e53e4eaec1157b8e492884c977eeda
  );
}

export default App;
