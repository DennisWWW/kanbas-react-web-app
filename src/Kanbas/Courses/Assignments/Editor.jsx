export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h2>Assignment Name</h2>
        <label id="wd-name"></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" rows="10" width= "100%">
        The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. 
        The landing page should include the following: Your full name and section, links to each of the lab assignments, 
        link to the Kanbas application, links to all relevant source code repositories. 
        The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
            <tr>
                <td align="right" valign="top">
                    <label id="wd-points">Points</label>
                </td>
                <td>
                    <input id="wd-points" value={100} />
                </td>
            </tr>

            <tr>
                <td align="right" valign="top">
                <label id="wd-group">Assignment Group</label>
                </td>
                <td>
                <select id="wd-group">
                    <option value="assignments">ASSIGNMENTS</option>
                    <option value="quizzes">QUIZZES</option>
                </select>
                </td>
            </tr>

            <tr>
                <td align="right" valign="top">
                <label id="wd-display-grade-as">Display Grade as</label>
                </td>
                <td>
                <select id="wd-display-grade-as">
                    <option value="percentage">Percentage</option>
                    <option value="points">Points</option>
                </select>
                </td>
            </tr>

            <tr>
                <td align="right" valign="top">
                    <label id="wd-submission-type">Submission Type</label>
                </td>
                <td>
                <select id="wd-submission-type">
                    <option value="online">Online</option>
                    <option value="onpaper">On Paper</option>
                    <option value="none">No Submission</option>
                </select>
                </td>
            </tr>

            <tr>
                <td></td>
                <td>
                    <label id="wd-text-entry">Online Entry Options</label>
                </td>
            </tr>

            <tr>
                <td></td>
                <td>
                    <div>
                        <input type="checkbox" id="wd-text-entry" />
                        <label id="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" id="wd-website-url" />
                        <label id="wd-website-url">Website URL</label><br />

                        <input type="checkbox" id="wd-media-recordings" />
                        <label id="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" id="wd-student-annotation" />
                        <label id="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" id="wd-file-upload" />
                        <label id="wd-file-upload">File Uploads</label><br />
                    </div>
                </td>
            </tr>
        </table>

        <table>
            <tr>
                <td align="right">
                    <label >Assign</label>
                </td>
                <td>
                    <label>Assign to</label>
                </td>
            </tr>

            <tr>
                <td></td>
                <td>
                <input id="wd-assign-to" value="Everyone" />
                </td>
            </tr>

            <tr>
                <td></td>
                <td>
                    <label htmlFor="wd-due-date">Due</label>
                </td>

            </tr>

            <tr>
                <td></td>
                <td>
                    <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
                </td>
            </tr>


            <tr>
                <td>
                    <label htmlFor="wd-available-from">Available from</label>
                </td>
                <td>
                    <label htmlFor="wd-available-until">Until</label>
                </td>
            </tr>

            <tr>
                <td>
                    <input type="date" id="wd-available-from" defaultValue="2024-05-06"/> 
                </td>
                <td> 
                    <input type="date" id="wd-available-until" defaultValue="2024-05-20"/>
                </td>
            </tr>
        </table><hr />
        

        <div style={{textAlign:"right"}}>
            <button style={{ marginRight: "10px" }}>Cancel</button>
            <button>Save</button>
        </div>
    </div>
);}
