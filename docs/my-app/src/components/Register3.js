import "./RegisterStyles.css";

function Register3() {
  return (
      <div class = "box">
        General Member Registeration
        <br />
        <br />
        <p class="head"> Thank you for registering to be a general member! Proceed to our events page to check out upcoming events.</p>

        {/* <div class = "input" > 
          <input type="text" required="required"/>
        </div> */}

        <a href ="/events" ><img src="images/arrowbutton.png"  class = "arrow"></img></a>

        
      </div>

  )
}

export default Register3;