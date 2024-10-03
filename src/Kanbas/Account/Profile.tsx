import { Link } from "react-router-dom";
import React from "react";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container my-4">
      <h3>Profile</h3>

      <div className="mb-3">
        <input
          id="wd-username"
          value="alice"
          placeholder="username"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          id="wd-password"
          value="123"
          placeholder="password"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          id="wd-firstname"
          value="Alice"
          placeholder="First Name"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          id="wd-lastname"
          value="Wonderland"
          placeholder="Last Name"
          className="form-control"
        />
      </div>

      {/* Date of Birth */}
      <div className="mb-3">
        <input
          id="wd-dob"
          type="date"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <input
          id="wd-email"
          value="alice@wonderland.com"
          type="email"
          className="form-control"
        />
      </div>

      <div className="mb-4">
        <select id="wd-role" className="form-control">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      <Link to="/Kanbas/Account/Signin">
        <button className="btn btn-danger w-100">Signout</button>
      </Link>
    </div>
  );
}
