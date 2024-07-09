const express = require("express")
const connectToDB = require("./database/database")
const Blog = require("./model/blogModel")

const app=express()
const multer=require("./middleware/multerConfig").multer
const storage=require("./middleware/multerConfig").storage
const upload= multer({storage : storage})


app.get("/",async(req,res)=>{
    // console.log(req)
    //res.send("haha")
    const blog=await Blog.find({});
    console.log(blog)


    res.render("blog/index.ejs")
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
    res.render("blog/createroute.ejs")
})
app.post("/createblog",upload.single('image'), async (req,res)=>{
const file = req.file;
    const image = file.filename;
    const {name,description}=req.body
     const blog =await Blog.create(
        {
            name,
            description,
            image,
        }
    )
   res.status(201).json({
    success:true,
    message:"Blog created Sucessfully!",
    data:blog
   })
})
app.use(express.static("./storage"))

app.listen(3000,()=>{
    console.log("Nodejs project has started at port" + 3000)
})