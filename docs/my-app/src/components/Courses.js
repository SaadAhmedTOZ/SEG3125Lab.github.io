import React from 'react';
import "./CoursesStyles.css";


function Courses() {
  return (
    <div>
          <h2 class ="title-courses">3rd Year Courses</h2>
<table class="center">
  <tr>
    <td>
      <div class="course-1">
        CEG 3136 &#10; Computer Architecture II
      </div>
    </td>
    <td><div class="course-1">
        Hack the Hill Hackathon
      </div></td>
    <td><div class="course-3">
        Hack the Hill Hackathon
      </div></td>
  </tr>
  <tr>
  <td>
  <div class="course-2">
        Hack the Hill Hackathon
      </div>
    </td>
    <td><div class="course-3">
        Hack the Hill Hackathon
      </div></td>
    <td><div class="course-1">
        Hack the Hill Hackathon
      </div></td>
  </tr>
  <tr>
  <td>
  <div class="course-2">
        Hack the Hill Hackathon
      </div>
    </td>
    <td><div class="course-2">
        Hack the Hill Hackathon
      </div></td>
    <td><div class="course-3">
        Hack the Hill Hackathon
      </div></td>
  </tr>
</table>
    </div>
  );
}

export default Courses;