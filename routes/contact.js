
const express=require("express")
const Contact = require("../Models/Contact")
const router=express.Router()

//post(add)
//rec.body
router.post('/',async (req,res)=>{
const {name,email,age}=req.body

try {
    const found=  await Contact.findOne ({email})
    if (found){

        return res.status(400).send({msg:"user already exist!"})
    }
    const newcontact= new Contact(req.body)
  
    await newcontact.save()

    res.status(200).send({msg:'user added',newcontact})
    
} catch (error) {
    res.status(500).send({msg:'could not add user'})

    
}
})
////method get/////(read):
router.get('/',async (req,res)=> {
    try {
        const Contacts= await Contact.find()
        res.status(200).send({msg:"list of users",Contacts})
    } catch (error) {
        res.status(500).send({msg:"could not find contact"})
    }
})
/////////METHOD:DELETE
/////////req.params
router.delete('/:ID',async(req,res)=>{
    const{ID}=req.params
    try {
        
        const removedcontact=  await Contact.findByIdAndDelete(ID)
 res.status(200).send({msg:"user deleted"})  
    } catch (error) {
res.status(500).send('could not delete user')

    }
})

/////UPDATE
//method:put
///req.params///req.body

router.put('/:ID', async (req,res)=>{
    const {ID}=req.params 
    try {
      const updateduser= await Contact.findByIdAndUpdate(ID,{$set:{...req.body}}) 
      res.status(200).send({msg:'user updates',updateduser}) 
    } catch (error) {
        res.status(500).send({msg:'could not update user'})
        
    }
})

////method get(read specific )
////req.params
router.get('/:ID',async(req,res)=> {
    const {ID}=req.params
    try {
        const contact=  await Contact.findById(ID)
        res.status(200).send({msg:'co', contact})
    } catch (error) {
        res.status(500).send({msg:'not found'})
    }
})
module.exports=router