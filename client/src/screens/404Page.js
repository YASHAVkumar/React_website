import React from 'react';
const Error=function(){
return(
   <>
   <div className="container-fluid my-5 pt-3" style={{textAligin:'center', backgroundColor:'coral',fontSize:'8vw',textAlign:'center'}}>
      <div className="container shadow-lg my-5">
        <h1>404 No Page Found.</h1>
        <h3>Please Redirect to Home Page <button className="btn btn-lg"><a href="/"><abbr title="Click me take to a flight of home page">HOME</abbr></a></button></h3>
        <div>
           <button className="btn btn-danger btn-lg" disabled>
            Error <span></span>
            <span className="spinner-grow spinner-grow-lg"></span>
            <span className="spinner-grow spinner-grow-lg"></span>
            <span className="spinner-grow spinner-grow-sm"></span>
            <span className="spinner-grow spinner-grow-sm"></span>
           </button>
        </div>
      </div>
   </div>
   </>
);
}

export default Error;