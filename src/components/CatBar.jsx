import { useEffect, useState } from "react";
import { getCategories } from "../utils/API";
import category from "./styling/category.css";
import { Link } from "react-router-dom";

const CatBar = () => {
    const [buttonClicked, setButtonClicked] = useState(false)
  const [displayCategories, setDisplayCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
        setButtonClicked(false)
        setDisplayCategories(data);
    });
  }, []);
  const buttonHandler = () => {
    setButtonClicked((bool) => !bool)
  }
  if(!buttonClicked) return <button onClick={buttonHandler}>Categories v</button>
  return (
    <div>
        <div>
          <Link to='/category/all'>  <button onClick={buttonHandler}>🏡</button></Link>
        
        {displayCategories.map((category, i) => {
            return (
            <Link to={`/category/${category.slug}`}>
            <button key ={i} type='submit' onClick={buttonHandler}>{category.slug}</button>
            </Link>)
        })}
        <Link to='/category/'>  <button onClick={buttonHandler}>More Info</button></Link>
        <Link to='/'>  <button onClick={buttonHandler}>Change User</button></Link>
        <button onClick={buttonHandler}>x</button>
        </div>
 
    </div>
  );
};

export default CatBar;
