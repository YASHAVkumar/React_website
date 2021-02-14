

/*****************************Problems Routes**************************************/

/****************************Imports********************************/
const mongoose=require('mongoose');
//const Problems=require('../models/problems_schema');
const Problems=mongoose.model('Problems')
const express=require("express");
const router=express.Router();

router.get("/sets",(req,res)=>{

 const {name,tag,cat,question,solution}=req.body;

    if(!name||!tag||!cat||!question||!solution)
    {console.log("This are required fields");
    req.json({msg:"all are required fileds"})
    }
    else
    {
      const demo=new Problems({

      name,
      tag,
      cat,
      question,
      solution ,
      });
      demo.save()
      .them((result)=>{
        console.log("data submitted succes fully "+result);
        res.status(200).json({msg:"success fully submitted"})
      })
      .catch((err)=>{
      console.log(err);
      res.status(500).json({msg:"Please recheck the data"})
      })


    }
});
exports.module=router;