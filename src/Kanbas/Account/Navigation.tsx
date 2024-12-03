import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const location = useLocation();

  return (
    

    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      
      <Link 
      to={`/Kanbas/Account/Signin`}  
      className={`list-group-item border-0 ${location.pathname === '/Kanbas/Account/Signin' ? 'active' : 'text-danger'}`}> Signin  </Link>
      <Link 
      to={`/Kanbas/Account/Signup`}  
      className={`list-group-item border-0 ${location.pathname === '/Kanbas/Account/Signup' ? 'active' : 'text-danger'}`}> Signup  </Link> 
      <Link 
      to={`/Kanbas/Account/Profile`} 
      className={`list-group-item border-0 ${location.pathname === '/Kanbas/Account/Profile' ? 'active' : 'text-danger'}`}> Profile </Link> 
           
      {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kanbas/Account/Users`} 
       className={`list-group-item border-0 ${location.pathname === '/Kanbas/Account/Users' ? 'active' : 'text-danger'}`}> Users </Link> )}<br/>
    </div>
);}
