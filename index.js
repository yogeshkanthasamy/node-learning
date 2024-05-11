const express=require('express')
const app=express()

const student=require('./student')
const staff=require('./staff')
// app.get('/',(req,res)=>{
//     res.send("Hellooooooo")
// })

// app.listen(3001,()=>{
//   console.log("server is running on port 3001");
// })


app.get('/',(req,res)=>{
        res.send("Home page")
    })

app.use('/student',student)
app.use('/staff',staff)


    app.listen(3001,()=>{
          console.log("server is running on port 3001");
        })
        