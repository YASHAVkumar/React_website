
import React from 'react';
import Home from './screens/Home';
import Problem from './screens/Problem';
import Error from './screens/404Page';
import './bootstrap.min.css';
import ShowProblem from './screens/ShowProblem';
import About from './screens/about';
import Search from './screens/search';
import Contact from './screens/contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App()
{

     return (
     <BrowserRouter>
       <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/addproblem">
             <Problem/>
         </Route>
         <Route path='/showproblem'>
              <ShowProblem />
         </Route>
           <Route path='/info@about'>
              <About />
           </Route>
            <Route path='/info@contact'>
              <Contact />
            </Route>
             <Route path='/search'>
               <Search />
             </Route>
         <Route path="*">
               <Error/>
         </Route>

         </Switch>
     </BrowserRouter>

     );

}

export default App;
