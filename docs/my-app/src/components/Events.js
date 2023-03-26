import React from 'react';
import "./EventsStyles.css";


function Events() {
  return (
    <div>
          <h2 class ="title-events">Past Events</h2>
<table class="center">
  <tr>
    <td>
      <div class="eventblur">
        <img src="images/hackthehill.png"></img>
        <h2>Hack the Hill Hackathon</h2>
        <h3>March 37th 2035</h3>
        <p>Join us for our first ever Hackathon! We will be hosting a 24 hour hackathon where you can work with your friends to create a project that you are passionate about. We will be providing food, drinks, and prizes for the top 3 teams. </p>
      </div>
    </td>
    <td><div>
        <img src="images/3155ReviewSession.png" class ="logo-events"></img>
        <p class="head-events">CEG3155 Review Session</p>
      </div></td>
    <td><div>
        <img src="images/meettheexecs.png" class ="logo-events"></img>
        <p class="head-events">Meet the Execs Event</p>
      </div></td>
  </tr>
  <tr>
  <td>
      <div>
        <img src="images/hackthehill.png" class ="logo-events"></img>
        <p class="head-events">Hack the Hill Hackathon</p>
      </div>
    </td>
    <td><div>
        <img src="images/3155ReviewSession.png" class ="logo-events"></img>
        <p class="head-events">CEG3155 Review Session</p>
      </div></td>
    <td><div>
        <img src="images/meettheexecs.png" class ="logo-events"></img>
        <p class="head-events">Meet the Execs Event</p>
      </div></td>
  </tr>
  <tr>
  <td>
      <div>
        <img src="images/hackthehill.png" class ="logo-events"></img>
        <p class="head-events">Hack the Hill Hackathon</p>
      </div>
    </td>
    <td><div>
        <img src="images/3155ReviewSession.png" class ="logo-events"></img>
        <p class="head-events">CEG3155 Review Session</p>
      </div></td>
    <td><div>
        <img src="images/meettheexecs.png" class ="logo-events"></img>
        <p class="head-events">Meet the Execs Event</p>
      </div></td>
  </tr>
</table>
    </div>
  );
}

export default Events;