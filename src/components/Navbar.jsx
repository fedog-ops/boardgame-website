import { useState } from "react"
import {Link} from 'react-router-dom'

const Navbar = ({currentCategory, setCurrentCategory}) => {

    return ( <div>
                 <Link to='/'>
                    <button type="submit" >Home</button>
                </Link>  
                <Link to='/category'>
                    <button type="submit" >Categories</button>
                </Link>
           
<p></p>
//FOR LATER TASK

        <form >
        <label>Category selector</label>
    
    <select value={currentCategory} onChange={(event) => setCurrentCategory(event.target.value)}>
        <option value="">all</option> 
        <option value="strategy">Strategy</option>
        <option value="hidden-roles">Hidden roles</option>
        <option value="dexterity">Dexterity</option>
        <option value="push-your-luck">Push your luck</option>
        <option value="roll-and-write">Roll and write</option>
        <option value="deck-building">Deck building</option>
        <option value="engine-building">Engine building</option>
</select >
    
</form> 
</div>
    )
}

export default Navbar