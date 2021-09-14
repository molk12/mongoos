import { useSelector } from "react-redux"
import Card from "./Card"
function List () {
const users=useSelector(state=>state.ContactReducer.Contacts)

    return (
<div  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}  >
    {users.map(el=>  <Card  el={el}  key={el._id}/>  )}
</div>
    )
}
export default List