
function Addnew(){
  return (
    <>
    <div className="container">
       <h1>Hey dear Coder!!</h1><span>Click Below to post your questions. </span>
       <form action="/addproblem">
          <button className=" my-1 pl-3 btn btn-dark btn-outline-success">My Own Code</button>
        </form>
    </div>
    </>
  )
}
export default Addnew;