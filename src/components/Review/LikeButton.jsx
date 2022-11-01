import { useState } from "react"
import { updateVotes } from "../../utils/API"

const LikeButton = ({review}) => {
    const {votes, review_id} = review
    const [likeIncrement, setLikeIncrement] = useState(0)
    const [oneClick, setOneClick] = useState(false)


    const handleLike = (value) => {
        
        (value === 1) ? setOneClick(true) : setOneClick(false)

        setLikeIncrement((currLikes) => currLikes + value)
       
        updateVotes(review_id, value).then((data)=> {
        }).catch((err)=>{
         setLikeIncrement((currLikes)=>currLikes-1)
         alert(err)
        })
        }
      
      const handleDisike = () => {
        
       if(votes > 0) {updateVotes(review_id, -1)
       setLikeIncrement(currLikes=>currLikes-1)
       }
        }
        
        const heartFactory = () => {
           if (votes + likeIncrement <= 0)return '💔'
            return '❤️'.repeat(review.votes + likeIncrement)
        }
        
        if(!oneClick){
            return <div> 
                <div>Votes: {heartFactory()}</div>
                <button onClick={() => handleLike(1)}>❤️</button>
            </div>
        }

   return (<div> 
                <div>Votes: {heartFactory()}</div>
               <button onClick={() => handleLike(-1)}>🥴</button>
            </div>)
        


        
   }
export default LikeButton