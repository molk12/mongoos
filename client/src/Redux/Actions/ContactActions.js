   


import axios from 'axios'
import { GET_CONTACT, GET_CONTACTS, TOOGLEFALSE, TOOGLETRUE } from '../Types/ContactTypes'

   export const getcontacts=()=>async (dispatch)=> {
try {
    const res=   await axios.get('/api/contacts')


    dispatch({type: GET_CONTACTS ,    payload:res.data.Contacts})
} catch (error) {
    console.log (error)
}
   }



   ///add new user

   export const addContact=(newcontact)=>async (dispatch) =>{
       try {
         const res = await  axios.post('/api/contacts',newcontact)  
       dispatch(getcontacts())
        } catch (error) {
        console.log(error)
       }
    }
        //// deltete 
   export const deletecontact =(id)=>async(dispatch)=> {
    try {
         await axios.delete(`/api/contacts/${id}`)
        dispatch(getcontacts())
    } catch (error) {
        console.log(error)
        
    }
   
   }

export const getcontact=(id)=>async(dispatch)=>{
    try {
      const res= await axios.get(`/api/contacts/${id}`)
      dispatch({type:GET_CONTACT,payload:res.data.contact})
      
    } catch (error) {
        console.log (error)
           
}
}
//edit
 export const editContact=(id,newcontact)=>(dispatch)=> {
    try {
     const res=axios.put(`/api/contacts/${id}`,newcontact)   
    dispatch(getcontacts())
    } catch (error) {
        console.log(error)
        
    }
}

export const toggletrue=()=> {
    return {type:TOOGLETRUE}
}

export const togglefalse=()=> {
    return {type:TOOGLEFALSE}
}