import "./NavbarStyles.css";
function Navbar() {
  return (
    <nav>
      <a href="/">
        CESAUO
      </a>

      <div>
        <ul id="navbar">
              <li><a href="/about">About</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>


    </nav>

    
    
  )
}


export default Navbar;