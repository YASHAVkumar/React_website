import React from 'react';

class Search extends React.Component{

   render(){
      return(
      <>
          <form className="form-inline " action="/search">
            <div className="input-group">
                   <input placeholder="Search Problem Tag" type="text" name="input" className="btn btn-outline-success text-danger bg-white form-control"/>
               <div className="input-group-append">
                  <input className="btn btn-success" type="submit" name="Submit" value="Search"/>
               </div>
            </div>
          </form>
      </>
      )
   }
}
export default Search;