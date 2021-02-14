import React from 'react';
import './header.css';
import Search from './Search';
class Header extends React.Component
{

   render(){
         return (
            <>
                  <div className='container-fluid'>

                             <nav className="navbar navbar-expand-sm sticky-top navbar-light">

                                    <div className="navbar-collapse collapse">
                                  <ul className="nav navbar-nav ">
                                     <li className="nav-brand">
                                       <a href="/"><h2>Coder's Choice</h2></a>
                                     </li>
                                  </ul>
                                  </div>
                                  <ul className="nav navbar-nav navbar-right">

                                   <li className="nav-item">
                                       <Search/>
                                   </li>


                            		 <li className="nav-item">
                            		   <a href="/info@contact" className="nav-link ">Contact</a>
                            		</li>
                            		<li className="nav-item">
                            		   <a href="/info@about" className="nav-link">About</a>
                            		</li>
                            	  </ul>

                               </nav>
                               <hr/>
                        </div>

            </>
              );
      }

}
export default Header;