// start your server here
const express=require("express")
const app=express()
const apiRouter=require("./api/server.js")



app.use("/api",apiRouter)



app.listen(3000,()=>{
    console.log("server running on port 3000")
})