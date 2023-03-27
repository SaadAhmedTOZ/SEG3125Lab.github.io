import "./RegisterStyles.css";
function RegisterFrench() {
  return (
      <div class = "box">
        Inscription générale des membres
        <br />
        <br />
        <p class="head"> S'il vous plaît entrez votre nom:</p>

        <div class = "input" > 
          <input type="text" required="required"/>
        </div>

        <a href ="/registerFr2" ><img src="images/arrowbutton.png"  class = "arrow"></img></a>

        
      </div>

  )
}

export default RegisterFrench;