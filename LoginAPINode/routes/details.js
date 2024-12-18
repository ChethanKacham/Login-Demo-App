const express = require('express')
const router = express.Router()
const Detail=require('../models/detail')
router.get('/',async(req,res)=>{
    try{
        const details =await Detail.find()
        res.json(details)
    }catch(err){
        res.send('Error '+err)
    }
})
router.post('/details',async(req,res)=>{
    const detail = new Detail({
            username : req.body.username,
            mobilenumber: req.body.mobilenumber,
            course : req.body.course
    })
    try{
        const d=await detail.save()
        res.json(d)
    }catch(err){
        res.send('Error '+err)
    }

})
router.delete('/details',async(req,res)=>{
    try{
        const details =await Detail.remove()
        res.json('All are Deleted ')
    }catch(err){
        res.send('Error '+err)
    }
})

router.delete('/details/:id',async(req,res)=>{
    try{
        const detail =await Detail.findById(req.params.id)
        const d1 = await detail.remove()
        res.json('Deleted '+d1)
    }catch(err){
        res.send('Error '+err)
    }
})



module.exports = router