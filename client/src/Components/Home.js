import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getcontacts, togglefalse } from "../Redux/Actions/ContactActions"

function Home() {
    const dispatch=useDispatch()
    return (
        
       <div> 
     <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Classi Responsive Navbar</title>
 
    
</head>
<body>

    <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <label class="logo">THIS IS A HOME  </label>
        <ul>
        
           <Link to='/AddUsers'> <li><a class="active" onClick={()=>dispatch(togglefalse())}    href="">Add New User</a></li> </Link>
          <Link to='/users' onClick={()=>dispatch(getcontacts())}  >  <li><a  class="active" href=""> Users</a></li> </Link>
      
        </ul>
    </nav>
    
</body>
       </div>
    
    )}
export default Home