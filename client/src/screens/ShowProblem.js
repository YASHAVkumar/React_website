import React from 'react';
import axios from 'axios';
import './showproblem.css';
import Header from '../components/Header';
import { Markup} from 'interweave';
import Line from '../components/divline';
class ShowProblem extends React.Component{

 constructor(props){
  super(props);
  this.state={name:"",tag:'',cat:"",question:'',solution:'',lan:'',user:'User'}
   }

  getRequest=()=>{
    console.log("hi sir i'm sunny");
    var url=window.location.search.slice(1);
     url=url.replace(/=/g,'":"');
      url=url.replace(/&/g,'","');
      url='{"'+url+'"}';
      var obj=JSON.parse(url);
     console.log(obj.id);
     axios.post("https://yashavreact.herokuapp.com/findone",obj)
     .then((response)=>{
         console.log(response.data);
         var obj=response.data;
       this.setState({name:obj.ProblemName,tag:obj.ProblemTag,cat:obj.ProblemCategories,question:obj.ProblemQuestion,solution:obj.ProblemSolution,lan:obj.ProblemLanguage,user:obj.ContributorName});

     });

  }

  componentDidMount=()=>{
   this.getRequest();
  }

  render(){

  return (
     <>
      <Header/>
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
     </>

    )
}
}
export default ShowProblem;
