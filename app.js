const express = require("express")
// const express = ()=>{
//     return{
//         get:"m",
//         age: 1
    
//     }
//     const data =express()
const app=express()
app.get("/",(req,res)=>{
    console.log(req)
    res.send("haha")
})
app.set('view engine',"ejs")
app.get("/about",(req,res)=>{
    const name="asg"
    res.render("about.ejs",{name})
}
)

app.get("/contact",(req,res)=>{
    const form="aces workshop"
    res.render("contact.ejs")
}
)
app.listen(3000,()=>{
    console.log("Nodejs project has started at port" + 3000)
})