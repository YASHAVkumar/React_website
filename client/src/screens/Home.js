import React from 'react';
//import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShowProblems from '../components/Problemdiv';
import Addnew from '../components/Addnew';
class Home extends React.Component {

render(){

return(
       <>
        <Header/>

        <div className='row'>
             <div className='col-sm-2'></div>
                 <div className='col-sm-7 shadow-lg'>
                    <div className="container ">
                      <span style={{fontSize:'4vw',color:'#0e0b2a'}}>Learn C and Java with Me</span>
                     </div>
                     <ShowProblems/>
                 </div>
              <div className='col-sm-3'><Addnew/></div>
         </div>
        <Footer/>
       </>
     );
}

}

export default Home;