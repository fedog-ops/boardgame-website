import './App.css';
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//context
import {UserContext} from './contexts/User'

//components
import Header from './components/Header';
import Navbar from './components/Navbar';

//routes
import Homepage from './components/Homepage';
import Category from './components/Category'
import CategoryBySlug from './components/CategoryBySlug';
import ReviewById from './components/ReviewById';

function App() {

const [currentCategory, setCurrentCategory] = useState('')
const [user, setUser] = useState('please select a user')
  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <div className="main">
          <p>{currentCategory}</p>
            <Header/>
            <Navbar/>

            <Routes>
                  <Route path='/' element ={<Homepage/>} />
                  <Route path='/category'  element ={<Category currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>} />
                  <Route path='/category/:slug' element = {<CategoryBySlug/>} />
                  <Route path='/reviews/:review_id' element = {<ReviewById/>} />
            </Routes>
          
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;