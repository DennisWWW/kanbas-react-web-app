import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const location = useLocation();

  function isActive(path: string): boolean {
    return location.pathname.startsWith(path);
  }

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link 
        to="/Kanbas/Courses/1234/Home" 
        id="wd-course-home-link"
        className={`list-group-item border-0 ${ (isActive('/Kanbas/Courses/1234/Home')) ? '' : 'text-danger'}`}>
        Home
      </Link>

      <Link 
        to="/Kanbas/Courses/1234/Modules" 
        id="wd-course-modules-link"
        className={`list-group-item border-0 ${ (isActive('/Kanbas/Courses/1234/Modules')) ? '' : 'text-danger'}`}>
        Modules
      </Link>

      <Link 
        to="/Kanbas/Courses/1234/Piazza" 
        id="wd-course-piazza-link"
        className={`list-group-item border-0 ${ (isActive('/Kanbas/Courses/1234/Piazza'))  ?  '': 'text-danger'}`}>
        Piazza
      </Link>

      <Link 
        to="/Kanbas/Courses/1234/Zoom" 
        id="wd-course-zoom-link"
        className={`list-group-item border-0 ${ (isActive('/Kanbas/Courses/1234/Zoom')) ? '' : 'text-danger'}`}>
        Zoom
      </Link>

      <Link 
        to="/Kanbas/Courses/1234/Assignments" 
        id="wd-course-assignments-link"
        className={`list-group-item border-0 ${isActive('/Kanbas/Courses/1234/Assignments') ? '' : 'text-danger'}`}>
        Assignments
      </Link>

      <Link 
        to="/Kanbas/Courses/1234/Quizzes" 
        id="wd-course-quizzes-link"
        className={`list-group-item border-0 ${isActive('/Kanbas/Courses/1234/Quizzes') ? '' : 'text-danger'}`}>
        Quizzes
      </Link>

      <Link 
        to="/Kanbas/Courses/1234/People" 
        id="wd-course-people-link"
        className={`list-group-item border-0 ${isActive('/Kanbas/Courses/1234/People') ? '' : 'text-danger'}`}>
        People
      </Link>
    </div>
  );
}
