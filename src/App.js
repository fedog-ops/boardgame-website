import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
function App() {
  return (
    <div className="main">
        <Header/>
        <Navbar/>
        <Homepage/>
    </div>
  );
}

export default App;
