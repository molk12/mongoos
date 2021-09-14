
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { addContact, editContact } from "../Redux/Actions/ContactActions"


function Add () {

  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [age,setage]=useState(0)
const dispatch =useDispatch()
const history=useHistory()
const contact=useSelector(state=>state.ContactReducer.contact)
const edit=useSelector(state=>state.ContactReducer.edit)
console.log(edit)
//  useEffect (()=> {
//  if (edit) {setname(contact.name);setemail(contact.email);setage(contact.age)}
//  else  {setname("");setemail("");setage("")}
//  })
useEffect(()=>{
  if (edit) {setname(contact.name);setemail(contact.email);setage(contact.age)}
   else {setname("");setemail('');setage(0)}
  
},[contact])

    return ( 
        <div> 
            <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>{edit ? 'EDIT': 'ADD'} </span>
            
            
          </div>
          
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME"  value={name} onChange={(e)=> setname(e.target.value)}/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL"  value={email}   onChange={(e)=> setemail(e.target.value)}/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="AGE"   value={age} onChange={(e)=> setage(e.target.value)}/>
            </div>
        
            <div class="app-form-group buttons">
              {/* {edit ? <button class="app-form-button" onClick={()=>{dispatch(editContact(contact._id,{name,email,age}));history.push('/users')}}>Edit</button>:<button  class="app-form-button" onClick={()=>{dispatch(addContact({name,email,age}));history.push('/users')}}>submit</button>}
              */}
{edit?   <button  class="app-form-button" onClick={()=>{dispatch(editContact(contact._id,{name,email,age}));history.push('/users')}}>submit</button> :  <button  class="app-form-button" onClick={()=>{dispatch(addContact({name,email,age}));history.push('/users')}}>submit</button> }
        
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</div>

        </div>
    )
}
export default Add