const mongoose=require("mongoose")


const ConnectDB=async ()=> {
try {
   
    await mongoose.connect(' mongodb://127.0.0.1:27017/') 
    console.log({msg:'DB is connected'})
}catch (error) {
   
    console.log ({msg:'DB is Not connected',error})
    
}
}

module.exports=ConnectDB