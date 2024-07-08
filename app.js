const express = require("express")
const connectToDB = require("./database/database")
const Blog = require("./model/blogModel")

const app=express()
app.get("/",(req,res)=>{
    // console.log(req)
    res.send("haha")
})
app.use(express.json())
app.use(express.urlencoded({extended:true}))

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
connectToDB();

app.get("/createblog",(req,res)=>{
    res.render("createroute.ejs")
})
app.post("/createblog", async (req,res)=>{
    const {name,description}=req.body
    await Blog.create(
        {
            name,
            description
        }
    )
    res.send("post hitted")
})

app.listen(3000,()=>{
    console.log("Nodejs project has started at port" + 3000)
})