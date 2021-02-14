import React from 'react';

class Foot extends React.Component{

 render(){
       return(<h1 style={{color:'red'}}>This is from footer. {this.props.problems}</h1>);
     }
}
export default Foot;