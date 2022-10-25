const express=require("express");

const app=express();
const cors=require("cors");
const courses=require("./data/courses.json")

app.use(cors());

const port =process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("The Server is Running hello world hhhi")
})
app.get("/courses",(req,res)=>{
    res.send(courses);

})
app.get("/courses/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const course=courses.find(cour=>id===cour.id);   
    res.send(course);
})


app.listen(port,()=>{
    console.log("server Running")
})