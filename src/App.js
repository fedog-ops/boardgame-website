import './App.css';
import {useState} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//components
import Header from './components/Header';
import Navbar from './components/Navbar';

//routes
import Homepage from './components/Homepage';
import Category from './components/Category'
import CategoryBySlug from './components/CategoryBySlug';

function App() {

const [currentCategory, setCurrentCategory] = useState('')

  return (
    <BrowserRouter>
      <div className="main">
        <p>{currentCategory}</p>
          <Header/>
          <Navbar/>

          <Routes>
                <Route path='/' element ={<Homepage/>} />
                <Route path='/category'  element ={<Category currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>} />
                <Route path='/category/:slug' element = {<CategoryBySlug/>} />
          </Routes>
         
      </div>
    </BrowserRouter>
  );
}

export default App;