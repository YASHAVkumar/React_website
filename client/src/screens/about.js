import React from 'react';
import Header from '../components/Header';

class About extends React.Component{
  render()
  {
     return (
     <>
        <Header />
         <div className="container-fluid mx-auto pt-2" style={{backgroundColor:'coral',width:'100%',height:'100%'}}>
             <div className="container my-4 pt-4 shadow-lg">
                 <h1 style={{color:"white"}}><label className="text-dark">CREATER :- </label> YASHAV KUMAR
                  </h1>
                  <h1 style={{color:"red"}}>About Me :-
                  </h1>
                  <p>
                     <span style={{color:"white"}}>
                     Hi I am Yashav wellcome's you. First thanks for visiting my site, I'm full stack Developer and 3 year Student at chitkara.
                     I Hope u like my work. I devoted most of this my time to build amazing websites to see more such work i uploaded  some Handles down below please visit and follow me.
                     If u want source code please visit to my github handle.
                    </span>
                    <h1 className="text-dark">My Social Handles :-</h1>


                    <p  className="pt-3">
                    <div className=" bg-light pt-3 pl-3">
                      <a href="https://www.linkedin.com/in/yashav-kumar/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="yashav-kumar" height="30" width="40" /></a>
                      <label className="text-secondary"> Linkedin Username</label> <a href="https://www.linkedin.com/in/yashav-kumar/">yashav-kumar</a>
                    </div>

                    <div className="bg-white  pt-2 pl-3">
                      <a href="https://www.facebook.com/Yashav.kumar.19" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="Yashav.kuamar.19" height="30" width="40" /></a>
                      <label className="text-secondary">Facebook Username</label> <a href="https://www.facebook.com/Yashav.kumar.19">yashav.kumar.19</a>
                    </div>

                    <div className="bg-white  pt-2 pl-3">
                       <a href="https://www.instagram.com/yashav__kumar/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="yashav__kumar" height="30" width="40" /></a>
                       <label className="text-secondary">Instagram Username</label> <a href="https://www.instagram.com/yashav__kumar/">yashav__kumar</a>
                    </div>

                    <div className="bg-white  pt-2 pb-3 pl-3">
                      <a href="https://github.com/YASHAVkumar" ><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="github" height="30" width="40"/></a>
                      <label className="text-secondary">Git hub Username</label> <a href="https://github.com/YASHAVkumar">YASHAVkumar</a>
                    </div>
                  </p>
             </p>
             </div>
          </div>
     </>
     )
  }
}
export default About;