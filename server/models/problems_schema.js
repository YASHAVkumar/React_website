
/**************************Imports***********/
const mongoose =require('mongoose');
//const {ObjectId} = mongoose.Schema.Types.ObjectId;

/*******************************Schema JSON *************************/
const Problems =mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
     ProblemName:{
             type:String,require:true
              },
     ProblemTag:{
              type:String,require:true
               },

     ProblemCategories:{
              type:String,require:true
              },
     ProblemQuestion:{
              type:String,require:true
              },
     ProblemSolution:{
              type:String,require:true
              },
     ProblemLanguage:{
     type:String,require:true},
     ContributorName:{
     type:String,require:false},

});
/***************************************Module Export****************/
exports.module=mongoose.model('Problems',Problems);