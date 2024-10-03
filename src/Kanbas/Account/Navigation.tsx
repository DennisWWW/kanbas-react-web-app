import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
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
      className={`list-group-item border-0 ${location.pathname === '/Kanbas/Account/Profile' ? 'active' : 'text-danger'}`}> Profile </Link> <br/>
    </div>
);}
