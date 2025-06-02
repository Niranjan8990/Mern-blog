 const mongoose=require('mongoose')
const express=require('express')

const app=express()
const port=3000

const Blog=require('./models/blogs')
const cors=require('cors')

app.use(express.json())
app.use(cors())

require('dotenv').config()

main()
.then(console.log("MONGODB Connected"))
.catch(err => console.log(err));

async function main(){
    await mongoose.connect(process.env.MONGODB_URL)
}


//Create A blog

app.post('/addblog',async(req,res)=>{
    try {
        if(!req.body){
            res.status(400).json({error:"Insufficeint data"})
        }
        const {title,author,content}=req.body

        const newBlog=new Blog({title,author,content})
        await newBlog.save()

        res.status(201).json({message:"Blog Created SucessFully"})
    } catch (error) {
        
    }
})


// Get all Blogs

app.get('/viewblogs',async(req,res) => {
    const blog= await Blog.find()
    if(!blog){
        res.status(400).json({error:"No Blogs Available"})
    }
    res.status(200).json({Blogs:blog})

})



app.listen(port,() => {
    console.log(`Server Listening on port ${port}`)
})