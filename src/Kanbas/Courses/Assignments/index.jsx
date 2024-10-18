import { FaPlus, FaCheckCircle } from "react-icons/fa";
import { FiMove } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import { GiStabbedNote } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import * as db from "../../Database"; // Assuming db has assignments
import { Link, useParams } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams(); // Retrieve course ID from params

  // Filter assignments based on the current course ID
  const filteredAssignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-assignments" className="container">
      <h3>Assignments for Course {cid}</h3>

      {/* Search Bar and Add Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group w-50">
          <span className="input-group-text">
            <FaMagnifyingGlass />
          </span>
          <input
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            className="form-control"
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-light btn-secondary me-2">
            <FaPlus className="me-2" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-2" /> Assignment
          </button>
        </div>
      </div>

      {/* Assignment Section */}
      <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          <TiArrowSortedDown className="me-2 fs-3" />
          <span className="me-auto">ASSIGNMENTS</span>
          <HiDotsVertical className="float-end fs-2" />
          <BsPlus className="float-end me-2 fs-2" />
          <button type="button" className="btn btn-outline-secondary float-end">40% of Total</button>
        </div>

        <ul className="wd-lessons list-group rounded-0">
          {filteredAssignments.map((assignment) => (
            <li key={assignment._id} className="wd-assignment-list-item list-group-item d-flex align-items-center mb-3">
              <BsGripVertical className="me-2 fs-3" />
              <GiStabbedNote className="me-2 fs-3" />
              <div className="flex-grow-1">
                <Link
                  className="wd-assignment-link fw-bold text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
                <p className="text-muted">
                  Multiple Modules |{" "}
                  <strong>Not available until {assignment.availableDate}</strong> | Due {assignment.dueDate} | {assignment.points}
                </p>
              </div>
              <FaCheckCircle className="text-success me-3" />
              <HiDotsVertical className="float-end fs-2" />
            </li>
          ))}
        </ul>
      </li>
    </div>
  );
}
