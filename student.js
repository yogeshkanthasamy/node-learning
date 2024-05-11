const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("student read page")
})

router.post('/post',(req,res)=>{
    res.send("student post page")
})
router.put('/put',(req,res)=>{
    res.send("student update page")
})

router.delete('/delete',(req,res)=>{
    res.send("student delete page")
})
module.exports=router