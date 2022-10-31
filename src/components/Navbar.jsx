import { useState } from "react"
import {Link} from 'react-router-dom'

const Navbar = ({currentCategory, setCurrentCategory}) => {
    const [review_id, setReview_id] = useState('')
   
    return ( <div>
                 <Link to='/'>
                    <button type="submit" >Home</button>
                </Link>  
                <Link to='/category'>
                    <button type="submit" >Categories</button>
                </Link>
<p></p>

        <form>
        <label>Review selector</label>
            <input
            type="text"
            required
            value = {review_id}
            onChange={(event)=> setReview_id(event.target.value)}
            id="review-search"
            placeholder="1-24"
        />
     <Link to={`/reviews/${review_id}`}>
             <button type="submit" >Search</button>
     </Link>  
   
</form> 
</div>
    )
}

export default Navbar 


/* <select value={currentCategory} onChange={(event) => setCurrentCategory(event.target.value)}>
        <option value="">all</option> 
        <option value="strategy">Strategy</option>
        <option value="hidden-roles">Hidden roles</option>
        <option value="dexterity">Dexterity</option>
        <option value="push-your-luck">Push your luck</option>
        <option value="roll-and-write">Roll and write</option>
        <option value="deck-building">Deck building</option>
        <option value="engine-building">Engine building</option>
</select > */