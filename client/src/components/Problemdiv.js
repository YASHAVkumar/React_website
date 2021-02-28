import React from 'react';
import axios from 'axios';



class showProblems extends React.Component{
 constructor(props){
    super(props);
    this.state={
      problems:[],
    }
 }
componentDidMount =()=>{
this.getRequest();
};
 getRequest=()=>{
 //console.log("this is in home page get ");
 axios.get("https://yashavreact.herokuapp.com/findall")
  .then((response) => {
       //   console.log(response.data[0]._id);
           this.setState({problems:response.data});
          // console.log(this.state.problems[0]._id+"  j");
   });

 }




   render(){

     return(
             <>
             <div className=" bg-light" >

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

                 {this.state.problems.map((x,i)=><tr key={i}>
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
                          <button className="btn" disabled> {x.ProblemCategories}</button>
                       </td>
                        <td>
                          <button className="btn" disabled> {x.ProblemLanguage}</button>
                       </td>
                    </tr>

                    )}

                  </tbody>

                 </table>
             </div>

             </>
           )
   }
}
export default showProblems;
