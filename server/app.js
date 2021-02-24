
/**********************************Required Imports*********************************/
var express=require("express");
var cors=require('cors');
var mongoose=require('mongoose');
var mongodb=require('mongodb').MongoClient;
var CircularJSON=require('circular-json')
var app=express();

const {MONGOURL}=require("./config/keys")


/***********************************Connection to db********************************/
mongoose.connect(MONGOURL||'mongodb://localhost/studentdata/Problem',{useUnifiedTopology: true,useNewUrlParser: true});
mongoose.Promise=global.Promise;
//mongoose.connect("mongodb://localhost:27017/studentdata",{useUnifiedTopology: true,useNewUrlParser: true});

mongoose.connection.on("connected",()=>{console.log("connected on mongodb");})
mongoose.connection.on("connected",()=>{console.log("connected on mongodb");})
mongoose.connection.on("error",()=>{console.log("Error"+error);})

app.use(express.json());
app.use(cors());
/***********************************Schema Imports********************************/
//app.use(require("./models/problems_schema"));
var problems=require("./models/problems_schema");
//const Problems=mongoose.model('Problems')

var problems=require("./models/reviews");

/***********************************Routes********************************/
//app.use(require("./routes/problem_set"));


const Problems=mongoose.model('Problems');
const Reviews=mongoose.model('Reviews');

//app.use(require("./routes/Review_set"));
/****************************Feed back Details****************************/
app.get("/server",(req,res)=>{
  console.log("Easy Job");
  res.json({msg:"Server side"});
  res.end();
})


app.get("/reviewdata",(req,res)=>{
   res.json({msg:"Good work buddy"});
   const {name,email,feedback}=req.body;

   const object=new Reviews(
   {
     _id:new mongoose.Types.ObjectId,
     Name:name,
     Email:email,
     Feedback:feedback,
   });
   object.save()
   .then(
   (response)=>{
      console.log(response);
      }
   )
    .catch((err)=>{
         console.log(err);
        // res.status(500).json({msg:"Please recheck the data"})
         })


   //console.log(req.url);
  //console.log(req.body);

   res.end();
})

app.post("/details",(req,res)=>{
   res.json({msg:"Good work buddy"});
   const {name,email,feedback}=req.body;

   const object=new Reviews(
   {
     _id:new mongoose.Types.ObjectId,
     Name:name,
     Email:email,
     Feedback:feedback,
   });
   object.save()
   .then(
   (response)=>{
      console.log(response);
      }
   )
    .catch((err)=>{
         console.log(err);
         res.status(500).json({msg:"Please recheck the data"})
         })


   res.end();
})
/******************************************setProblem ********************/
app.post("/setproblem",(req,res)=>{
 //console.log(req.body);
 //console.log(req.url);
 const {name,tag,cat,question,solution,lan,user}=req.body;

    if(name==" "||tag==" "||cat==" "||question==" "||solution==" "||lan==" ")
    {console.log("This are required fields");
    res.json({msg:"all are required fileds"})
    }
    else{
      const demo=new Problems({
      _id:new mongoose.Types.ObjectId,
      ProblemName:name,
      ProblemTag:tag,
      ProblemCategories:cat,
      ProblemQuestion:question,
      ProblemSolution:solution ,
      ProblemLanguage:lan,
      ContributorName:user,
      });

      demo.save()
      .then((result)=>{
        console.log("data submitted succes fully "+result);
       // res.json({msg:"success fully submitted"});
      })
      .catch((err)=>{
      console.log(err);
     // res.status(500).json({msg:"Please recheck the data"})
      })
  }
});

/******************************************getProblem ********************/
app.get('/getproblem',(req,res)=>{

 Problems.find()
 .then((posts)=>{
 res.json({posts});
 })
 .catch((err)=>{
 console.log(err);
 });
});
/******************************************Find Problem By Id ********************/
app.post('/findOne',(req,res)=>{
//res.write("jlaflala");
/*
,(err,result)=>{
if(err)
throw err;
console.log(result);
}

*/
console.log(req.body.id);


var data={};
Problems.findOne({_id:req.body.id},(err,result)=>{
if(err)
throw err;
else
res.status(200).send(result);
console.log(result);
 res.end();
});
//var str=CircularJSON.stringify(data);
//JSON.parse(str);
//console.log(str);
//res.write(str);
//res.status(200).json(data);

})
/****************************************Find ALL ************************/
app.get('/findall',(req,res)=>{
Problems.find().sort({ProblemName:'1'}).exec((err,result)=>{
if(err)
throw err;
res.status(200).send(result);
//console.log(result);
res.end();
});


})
/**********************************Find Problems by tag********************/
app.post('/findbytag',(req,res)=>{
 Problems.find({ProblemTag:req.body.input}).exec((err,result)=>{
 if(err)
 throw err;
  res.status(200).send(result);
  console.log(result);
 res.end();
 })
});

/****************************************Delete  One************************/
app.get('/deleteone',(req,res)=>{

Problems.deleteOne({_id:'600eafc21f2d961d1c8808b3'},(err,obj)=>{
if(err)
throw err;
console.log(obj.result._id);
});

res.end();

})
/****************************************Update One************************/
app.get('/updateone',(req,res)=>{
var old ={_id:'600eafa53228710d4ccb23a8',ProblemTag:'faug chal raha ha'};
var newone={ProblemTag:'ram jaane kya hoga mera'};
Problems.updateOne(old,newone,(err,res)=>{
if(err)
throw err;
//res.write("One file is updated");
console.log("One document is updated now");

});
res.end();

})




/*********************************Server Response **********************************/
if(process.env.NODE_ENV==='production')
 {
    //app.use(express.static('client/build'));
    const path=require('path')
    app.get("*",(req,res)=>{
    res.sendFile(path.resolve(_dirname,'client','index.html'))
    })
  }

var port=process.env.PORT||5000;

app.listen(port,()=>{console.log("express is working now "+port);console.log(process.env.PORT);})
