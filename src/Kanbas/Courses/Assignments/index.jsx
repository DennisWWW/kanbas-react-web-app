import { FaPlus, FaCheckCircle } from "react-icons/fa";
import { FiMove } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import { GiStabbedNote } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container">
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

      <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <TiArrowSortedDown className="me-2 fs-3"/>
            <span className="me-auto">ASSIGNMENTS</span>
            <HiDotsVertical className="float-end fs-2"/>
            <BsPlus className="float-end me-2 fs-2" />
            <button type="button" class="btn btn-outline-secondary float-end">40% of Total</button>
          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-assignment-list-item list-group-item d-flex align-items-center mb-3">
              <BsGripVertical className="me-2 fs-3" />
              <GiStabbedNote className="me-2 fs-3" />
              <div className="flex-grow-1">
                <a
                  className="wd-assignment-link fw-bold text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  
                >
                  A1
                </a>
                <p className="text-muted">
                  Multiple Modules |{" "}
                  <strong>Not available until May 6 at 12:00am</strong> | Due May
                  13 at 11:59pm | 100 pts
                </p>
              </div>
              <HiDotsVertical className="float-end fs-2"/>
              <FaCheckCircle className="text-success me-3" />
            </li>

            <li className="wd-assignment-list-item list-group-item d-flex align-items-center mb-3">
              <BsGripVertical className="me-2 fs-3" />
              <GiStabbedNote className="me-2 fs-3" />
              <div className="flex-grow-1">
                <a
                  className="wd-assignment-link fw-bold text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/124"
                >
                  A2
                </a>
                <p className="text-muted">
                  Multiple Modules |{" "}
                  <strong>Not available until May 13 at 12:00am</strong> | Due May
                  20 at 11:59pm | 100 pts
                </p>
              </div>
              <HiDotsVertical className="float-end fs-2"/>
              <FaCheckCircle className="text-success me-3" />
            </li>

            <li className="wd-assignment-list-item list-group-item d-flex align-items-center mb-3">
              <BsGripVertical className="me-2 fs-3" />
              <GiStabbedNote className="me-2 fs-3" />
              <div className="flex-grow-1">
                <a
                  className="wd-assignment-link fw-bold text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/125"
                >
                  A3
                </a>
                <p className="text-muted">
                  Multiple Modules |{" "}
                  <strong>Not available until May 20 at 12:00am</strong> | Due May
                  27 at 11:59pm | 100 pts
                </p>
              </div>
              <FaCheckCircle className="text-success me-3" />
              <HiDotsVertical className="float-end fs-2"/>
            </li>
          </ul>
        </li>
    </div>
  );
}
