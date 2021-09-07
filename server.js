const express=require("express")
const ConnectDB = require("./config/connectDB")
const contactRoute = require("./routes/contact")
const app=express()



ConnectDB()
const port=5000
app.use(express.json())

console.log(contactRoute)
/////////route//////
app.use('/api/contacts',contactRoute)

app.listen(port,()=> {
    console.log(`server is running on port ${port}`)
})