import React from 'react';
import "./CoursesStyles.css";


function Courses() {
  return (
    <div>
          <h2 class ="title-courses">Courses</h2>
<table class="center">
  <tr>
    <td>
      <div class="course-3">
      CEG 4136 | Computer Architecture III
      </div>
    </td>
    <td><div class="course-3">
    CEG 4912 | Computer Engineering Design: Project I
      </div></td>
    <td><div class="course-3">
    CEG 4166 | Real-Time Systems Design
      </div></td>
  </tr>
  <tr>
  <td>
  <div class="course-3">
  CEG 4913 | Computer Engineering Design: Project II
      </div>
    </td>
    <td><div class="course-3">
    CEG 3136 | Computer Architecture II
      </div></td>
    <td><div class="course-3">
    CEG 3155 | Digital Systems II
      </div></td>
  </tr>
  <tr>
  <td>
  <div class="course-2">
  ELG 3125 | Signal and System Analysis
      </div>
    </td>
    <td><div class="course-1">
    CSI 3131 | Operating Systems
      </div></td>
    <td><div class="course-2">
    ELG 3155 | Introduction to Control Systems
      </div></td>
  </tr>
</table>
    </div>
  );
}

export default Courses;