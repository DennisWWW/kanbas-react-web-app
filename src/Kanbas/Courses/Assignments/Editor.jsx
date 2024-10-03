export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
            <h2>Assignment Name</h2>

            <div className="mb-3">
                <input id="wd-name" value="A1" className="form-control" />
                </div>

    
                <div className="mb-3">
                <label htmlFor="wd-description" className="form-label"></label>
                <textarea
                    id="wd-description"
                    rows="5"
                    className="form-control"
                    defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. 
                The landing page should include the following:
                - Your full name and section
                - Links to each of the lab assignments
                - Link to the Kanbas application
                - Links to all relevant source code repositories.
                The Kanbas application should include a link to navigate back to the landing page.`}
                ></textarea>
            </div>

            <div className="row mb-3 align-items-center">

                <label htmlFor="wd-points" className="col-sm-2 form-label text-end">Points</label>

                <div className="col-md-10">
                <input id="wd-points" value={100} type="number" className="form-control" />
                </div>
            </div>

            <div className="row mb-3 align-items-center">
                <label htmlFor="wd-group" className="form-label text-end col-md-2">Assignment Group</label>
                <div className="col-md-10">
                <select id="wd-group" className="form-control col-md-10">
                    <option value="assignments">ASSIGNMENTS</option>
                    <option value="quizzes">QUIZZES</option>
                </select>
                </div>
            </div>

            <div className="row mb-3 align-items-center">
                <label htmlFor="wd-display-grade-as" className="form-label col-2">Display Grade as</label>
                <div className="col-md-10">
                <select id="wd-display-grade-as" className="form-control col-md-10">
                    <option value="percentage">Percentage</option>
                    <option value="points">Points</option>
                </select>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="wd-submission-type" className="form-label col-2">Submission Type</label>
                <div className="col-md-10 border border-secondary">

                    <select id="wd-submission-type" className="form-control col-md-10 mt-3">
                        <option value="online">Online</option>
                        <option value="onpaper">On Paper</option>
                        <option value="none">No Submission</option>
                    </select>

                    <div className="mb-4">
                        <label className="form-label">Online Entry Options</label>
                        <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                        </div>
                        <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-website-url" defaultChecked />
                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                        </div>
                        <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                        </div>
                        <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                        </div>
                        <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                        <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                        </div>
                  
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="wd-assign" className="form-label col-2 text-end">Assign</label>      
                <div className="col-md-10 border border-secondary">
                    <div className="row mb-3 mt-2">
                        <div className="col-md-12">
                        <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                        <input id="wd-assign-to" value="Everyone" className="form-control" />
                        </div>
                        <div className="col-md-6">
                        <label htmlFor="wd-due-date" className="form-label">Due</label>
                        <input id="wd-due-date" type="date" defaultValue="2024-05-13" className="form-control" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                        <label htmlFor="wd-available-from" className="form-label">Available from</label>
                        <input id="wd-available-from" type="date" defaultValue="2024-05-06" className="form-control" />
                        </div>
                        <div className="col-md-6">
                        <label htmlFor="wd-available-until" className="form-label">Until</label>
                        <input id="wd-available-until" type="date" defaultValue="2024-05-20" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        
        <hr />

        <div className="text-end">
            <button className="btn btn-secondary me-3">Cancel</button>
            <button className="btn btn-danger">Save</button>
        </div>
   
    </div>
);}
