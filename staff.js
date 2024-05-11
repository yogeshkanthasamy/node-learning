const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("staf read page")
})

router.post('/post',(req,res)=>{
    res.send("staf create page")
})

module.exports=router