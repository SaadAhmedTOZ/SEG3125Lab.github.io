import "./RegisterStyles.css";
function Register() {
  return (
      <div class = "box">
        General Member Registeration
        <br />
        <br />
        <p class="head"> Please enter your name:</p>

        <div class = "input" > 
          <input type="text" required="required"/>
        </div>

        <a href ="/register2" ><img src="images/arrowbutton.png"  class = "arrow"></img></a>
        
      </div>

  )
}

export default Register;