import { useDispatch } from "react-redux"
import { deletecontact, getcontact, toggletrue } from "../Redux/Actions/ContactActions"
import {Link} from 'react-router-dom'

function Card ({el}) {
  const dispatch=useDispatch()
  
    return (
      

  <li class="card"  >
    <a href="" >
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{el.name}</h3>            
            <span class="card__status">{el.email}</span>
          </div>
        </div>
        <p class="card__description">{el.age}</p>
        <button class="button" onClick={(e)=>{ e.preventDefault(); dispatch(deletecontact(el._id))}}>DELETE</button>
 <Link to='/editContact'><button onClick={()=>{dispatch(getcontact(el._id));dispatch(toggletrue())}}  class="button" > Edit </button> </Link> 
       
       
      </div>
    </a>      
  </li>
 

      
    )
}
export default Card
