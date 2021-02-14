import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Addnew from '../components/Addnew';
class Search extends React.Component{
    constructor(props){
     super(props);
     this.state={search:[]}
      }

     getRequest=()=>{
       console.log("Jaduu");
       var url=window.location.search.slice(1);
        url=url.replace(/=/g,'":"');
         url=url.replace(/&/g,'","');
         url='{"'+url+'"}';
         var obj=JSON.parse(url);
        console.log(obj.input);
        axios.post("http://127.0.0.1:5000/findbytag",obj)
        .then((response)=>{
           // console.log(response.data);
            var obj=response.data;
           this.setState({search:obj})
            console.log(this.state);
        });

     }

     componentDidMount=()=>{
      this.getRequest();
     }

   render(){
     /*
       <div className="container-fluid my-5 pt-3" style={{textAligin:'center', backgroundColor:'coral',fontSize:'8vw',textAlign:'center'}}>
                    <div className="container shadow-lg my-5">
                       <h1 style={{color:'#0e0b2a'}}>Sorry for Inconvenience This Feature is Coming Soon Wait Till next Assignment </h1>
                       <img src="https://media.giphy.com/media/Ve4unEdmWZ58MoBHqv/source.gif" width="5VM" alt="Sorry"/>
                       <a href="/">Take Flight to Home</a>
                   </div>
       </div>
     */
     return (
           <>
           <Header/>
        <div className='row my-3 pt-5'>
             <div className='col-sm-2'></div>
                 <div className='col-sm-7 shadow-lg'>
           <div className="container bg-light" >
              <table className="table ">
                 <thead style={{background:'black',color:'coral',fontSize:'1vw'}}>
                  <tr>
                  <td>S No. </td>
                  <td>Problem Name</td>
                  <td>Problem Tag</td>
                  <td>Problem Level</td>
                  <td>Language</td>
                  </tr>
                  </thead>
                  <tbody className="text-dark">

                 {this.state.search.map((x,i)=><tr key={i}>
                     <td>{i+1}.</td>

                     <td>
                         <form action='showproblem/'>
                            <button className="btn " value={x._id}  name="id">{x.ProblemName}</button>
                         </form>
                     </td>
                     <td>
                       <form action='showproblem/'>
                         <button className="btn " value={x._id}  name="id">{x.ProblemTag}</button>
                        </form>
                      </td>
                       <td>
                        <button className="btn" > {x.ProblemCategories}</button>
                       </td>
                       <td>
                        <button className="btn" > {x.ProblemLanguage}</button>
                       </td>
                    </tr>

                    )}

                  </tbody>

              </table>
           </div>
        </div>
              <div className='col-sm-3'><Addnew/></div>
     </div>

          </>
      )
   }

}
export default Search;