/*************************Imports***************************/
const mongoose=require('mongoose');
/***********************Schema************************/

const reviews=mongoose.Schema({
   _id:mongoose.Schema.Types.ObjectId,
   Name:{type:String,require:true},
   Email:{type:String,require:false},
   Feedback:{type:String,require:true},
});
exports.module=mongoose.model('Reviews',reviews);