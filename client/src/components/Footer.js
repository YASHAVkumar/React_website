import React from 'react';

class Footer extends React.Component{

 render(){
       return(
          <div className="container-fluid " style={{background:'black'}}>

              <div className="container-fluid text-info my-3 pt-3 sticky-bottom">
                  <h3><u>About C Language</u></h3>

                  <ol>
                   <li>
                     C programming is a general-purpose, procedural, imperative computer programming language developed in 1972 by Dennis M. Ritchie at the Bell Telephone Laboratories to develop the UNIX operating system. C is the most widely used computer language. - www.tutorialspoint.com
                   </li>
                   <li>
                      The main features of C language include low-level access to memory, a simple set of keywords, and clean style, these features make C language suitable for system programmings like an operating system or compiler development.- www.geeksforgeeks.org
                   </li>
                   <li>
                     C language is a system programming language because it can be used to do low-level programming (for example driver and kernel).- www.javatpoint.com
                   </li>
                  </ol>

              </div>
                <div className="container-fluid text-info my-3 pt-3 sticky-bottom">
                      <h3><u>About Java Language</u></h3>
                      <p>
                        Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere, meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages.
                      </p>


                </div>
          </div>
       );
     }
}
export default Footer;