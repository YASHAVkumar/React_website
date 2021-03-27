import React from 'react';
import Header from '../components/Header';
import axios from 'axios';

class Contact extends React.Component
{
constructor(props)
{
   super(props);
  this.state={
    "name":'',"email":'',"feedback":''
  }
}

del=(event)=>{
  var objname=event.target.name;
  var objvalue=event.target.value;
  if(objname==="name")
  this.setState({name:objvalue});
  else if(objname==="email")
  this.setState({email:objvalue});
  else if(objname==="feedback")
  this.setState({feedback:objvalue});

}


alertBox=()=>{
  alert('Successfully Submitted');
}


detail=(event)=>{
   event.preventDefault();
   console.log("well come back dear!!");
   
   //  this.setState({name:obj.name,email:obj.email,feedback:obj.feedback});
     console.log(this.state);
   //var obj=JSON.parse(this.state);
   axios.get("https://yashavreact.herokuapp.com/details",this.state)
     .then((response) => {
         console.log("nahi ho raha kya");
      });

  // this.alertBox();
}


render()
{
   return(
       <>
         <Header />

         <div className="my-3 pt-4 mx-auto" style={{backgroundColor:'coral'}}>
          <div className="container-fluid" style={{position:'relative', top:'20%',background:'transparent'}}>
                  <div className="container pt-5 shadow-lg text-dark" >
          		    <div className="row"> 
          			    <div className="col-sm-6 ">
          				    <div><h1 style={{fontSize:'4vw'}}><u>My Contacts</u></h1></div>
          					<div>
          					<ul type="none">
          					    <li><span>NAME :</span> <h2 style={{fontSize:'3vW'}}><i className="far fa-user"> </i> YASHAV KUMAR</h2></li>
          						<li><span>Email :</span> <h2 style={{fontSize:'3vW'}}><i className="fas fa-phone"></i> yashavkumar91@gmail.com</h2></li>
          						<li><span>ADDRESS :</span> <h2 style={{fontSize:'3vW'}}><i className="fas fa-address-card"></i> Kangra (H.P), India</h2></li>
          					</ul>
          					  
          					</div>
          				</div>


          				<div className="col-sm-6">
          			        <div><h1 style={{fontSize:'3vw'}}><u>Please Send Your Feedback!!</u></h1></div>

          					<form action="#" method='GET' onSubmit={this.detail}>

                             <table className="table text-light">
          					  <tbody>
          					     <tr>
          					        <td>
          					          <h1> <i className="far fa-user"></i></h1><label>Name </label>
          						     </td>
          					         <td>
          						     <input className="btn btn-outline-info " name="name" type="text" required placeholder="Your Name" onChange={this.del.bind(this)}/>
          						    </td>
          					     </tr>

                                 <tr>
                                   <td>
          						     <h1><i className="fas fa-envelope-square"></i></h1>
          						     <label>Email  </label>
          						   </td>
          						    <td>
          						    <input className="btn btn-outline-info " name="email" type="email" required placeholder="Your Email" onChange={this.del.bind(this)}/>
          						    </td>
          					      </tr>
          						  <tr>
          						    <td>
          						      <h1><i className="fas fa-grin-squint"></i></h1>
          						     <label>Your Suggestions </label>
          						    </td>
          						     <td>
          						       <textarea className="btn btn-outline-info " name="feedback" type="text"placeholder="Your text here" height="140px" required onChange={this.del.bind(this)}></textarea>
          						     </td>
          						   </tr>

                                 <tr>
                                    <td>
          						       <input className="btn btn-outline-primary btn-secondary " type="submit" name="submit"/>
                                    </td>
          						    <td>
          						       <input className="btn btn-outline-primary btn-secondary " type="reset" name="Reset"/>
                                    </td>
                                 </tr>

                                </tbody>
          					  </table>

          					</form>
          				</div>
          			</div>
          		
          		</div>
          		
            </div>
        </div>
       </>
    )
}

}

export default Contact;
