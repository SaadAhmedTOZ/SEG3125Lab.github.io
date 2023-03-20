import "./NavbarStyles.css";
function Navbar() {
  return (
    <nav>
      <a href="index.html">
        CESAUO
      </a>

      <div>
        <ul id="navbar">
              <li><a href="index.html">About</a></li>
              <li><a href="index.html">Team</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="index.html">Courses</a></li>
              <li><a href="index.html">FAQ</a></li>
        </ul>
      </div>


    </nav>

    
    
  )
}


export default Navbar;