import React from 'react';
import axios from 'axios';
import Header from '../components/Header';
//axios.post("http://localhost:5000/data",this.state);
import { Markup} from 'interweave';
import Line from '../components/divline';
import Alert from '../components/Alert';
class Problem extends React.Component
{
 constructor(props){
  super(props);
  this.state={name:"",tag:'',cat:"",question:'',solution:'',lan:'',user:'Unknown'}
 }


func=(event)=>{
  let name=event.target.name;
  let value=event.target.value;
  console.log(" hi sir this is func");
  if(name==="name")
   {
   this.setState({name:value,});
   }
     if(name==="tag")
     {

         value=value.toUpperCase();

          this.setState({tag:value,});
     }

   if(name==="cat")
  this.setState({cat:value,});
    if(name==="question")
   this.setState({question:value,});
     if(name==="solution")
    this.setState({solution:value,});
     if(name==="lan")
        this.setState({lan:value,});
         if(name==="user")
            this.setState({user:value,});

}

set=(event)=>{
 event.preventDefault();
 alert("Thanks buddy");
 console.log(this.state);
  console.log("this is from set");
  axios.post("https://yashavreact.herokuapp.com/setproblem",this.state);

}

 render()
 {
  //console.log("hi sisfklfjdal;fa;l Problem js");
  return(
  <>
  <Header/>
  <div className="container-fluid">
       <div className="container-fluid ">
          <div className="row ml-1 pt-2  bg-success shadow-sm">
             <h1 style={{marginLeft:'1vw',color:'white',textShadow:'2px 2px black,2px 2px red'}} >Hey Coder <img alt="Hi!!" src="https://media.giphy.com/media/LY8yDak6Tngb6FfPrt/source.gif" width="50" height="50"/> , Thanks for Contributing to Coder's Choice.</h1>
             <h4 style={{color:'cyan',marginLeft:'2vw'}}>Add your problem or information </h4>
          </div>
          <hr/>
          <Alert/>


          <div className="container ml-5 shadow-sm">
            <form action="/" method="POST" onSubmit={this.set}>
                <div className="form-group">
                    <h1 for="ProblemName">Enter Your Problem Name</h1>
                    <textarea className="form-control" name="name" row="2" maxlength="50" required placeholder="Enter text here" onChange={this.func.bind(this)}></textarea>
                </div>
                <div className="form-group">
                    <h1 for="ProblemTag">Enter Your Problem Tag </h1>
                    <input className="form-control" maxlength="8" type="text" name="tag" required placeholder="Enter text here" onChange={this.func.bind(this)} style={{textTransform:'uppercase'}} />
                </div>
                <div className="form-group">
                      <h1 for="ProblemLanguage">Select your Language</h1>
                      <select className="form-control" name="lan" onMouseMove={this.func.bind(this)} required onChange={this.func.bind(this)} >
                         <option>C</option>
                         <option>Java</option>
                      </select>
                 </div>
                  <div className="form-group">
                      <h1 for="ProblemCategories">Difficulty of Problem</h1>
                      <select  className="form-control" name="cat"onMouseMove={this.func.bind(this)} required onChange={this.func.bind(this)} >
                         <option>Easy</option>
                         <option>Medium</option>
                         <option>Hard</option>
                      </select>
                 </div>
                 <div className="form-group">
                     <h1 for="ProblemQuestion">Enter Your Problem Question</h1>
                     <textarea className="form-control" name="question" row="2" placeholder="Enter text here" onChange={this.func.bind(this)} ></textarea>
                 </div>
                  <div className="form-group">
                      <h1 for="ProblemSolution">Enter Your Problem Solution</h1>
                      <textarea className="form-control" name="solution" row="2" required placeholder="Enter text here" onChange={this.func.bind(this)} ></textarea>
                   </div>
                   <div className="form-group">
                      <h1 for="ProblemDeclaration">Question Declaration</h1>
                       <label>These all statements are true and correct. Oterwise admin have all Rights to <abbr title="R & D"> <b> Delete or Edit</b> </abbr> this statements</label>
                      <br/>
                       <input type="checkbox" defaultChecked  name="check"/> I Agree
                      <input className="form-control" name="user" row="2" maxlength="15" placeholder="Enter text here"  onChange={this.func.bind(this)}/>
                    </div>
                   <div className="btn-group btn-group-justified.block my-3 pl-5 ">
                    <input className="btn btn-primary btn-outline-success text-white mr-5 " type="submit" name="Data" value="Save"/>
                    <input className="btn btn-primary btn-outline-warning text-white" type="reset" name="Reset" value="Reset"/>
                   </div>
            </form>
          </div>
       </div>
       <div>
         <hr/>
         <h2>Preview Your Code </h2>
         <hr/>
            <div className="container-fluid bg-light">
                    <div className="row mt-5">
                       <div className="col-sm-2" id="ques" >
                           <div className="container bg-dark text-white">
                                <h4>Thanks to {this.state.user}</h4>
                           </div>
                       </div>
                       <div className="col-sm-9">
                         <div className="container-fluid shadow-md bg-white">
                            <div  style={{textAlign:'end'}}>
                                 <h2>Problem in {this.state.lan}</h2>
                                 <h4 >Level - {this.state.cat}</h4>
                            </div>
                            <Line/>
                            <div style={{display:'inline-block'}} width="100%">
                               <span style={{fontSize:'3vw'}}>{this.state.name}  |</span>
                               <span style={{fontSize:'1vw',color:'red'}}> {this.state.tag}</span>
                            </div>

                            <Line/>
                            <div style={{marginTop:'1vw'}}>

                               <h2><Markup content={this.state.question}/></h2>
                            </div>
                             <Line/>

                             <div className="container">
                             <div className="container bg-light shadow-lg border" style={{marginTop:'1vw',color:'black'}}>
                              <h5><Markup content={this.state.solution}/></h5>
                              </div>
                             </div>
                          </div>
                       </div>
                       <div className="col-sm-1"></div>
                    </div>
                </div>
       </div>
  </div>

   </>
  );

}

}

export default Problem;
