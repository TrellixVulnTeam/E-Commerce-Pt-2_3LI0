import logo from './logo.svg';
import './App.css';
import './'
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/HomePage/Home';
function App() { 
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Footer/>
  
    </div>
  );
}

export default App;