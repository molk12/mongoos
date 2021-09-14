import { GET_CONTACT, GET_CONTACTS, TOOGLEFALSE, TOOGLETRUE } from "../Types/ContactTypes";


const initalState={
    Contacts:[],
    contact:{},
    edit:false



}

const ContactReducer=(state=initalState,action)=> {
switch (action.type) {
    case GET_CONTACTS:
     return {...state, Contacts:action.payload   }  


case GET_CONTACT:
    return {...state,contact:action.payload}


case TOOGLETRUE:
    return{...state,edit:true}

case TOOGLEFALSE:
    return {...state,edit:false}
    
    default:
        return state
}
    
}
export default  ContactReducer