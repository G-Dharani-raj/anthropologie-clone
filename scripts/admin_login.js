// basic importing appending components
import {admin_login} from "../components/admin_login_compo.js"

function loginPage(){
    document.getElementById("container").innerHTML = admin_login()
}
//loginPage()


//back to Wostyle button onclick
document.getElementById("backtomain").onclick = ()=>{
    location.href = "/index.html";
}

//create account button onclick
document.getElementById("create_admin").onclick = ()=>{
    location.href = "/admin_signup.html";
}

//login function
document.getElementById("login_button_admin").onclick = () => {
    logIn();
  };

  async function logIn(){
    let temp = document.getElementById("admin_login_container");
    let email = document.getElementById("email_admin").value;
    let password = document.getElementById("password_admin").value;
    temp.innerText = "Please wait Login in...";
    temp.style.backgroundColor = "#ffe082";

    let res = await fetch(`https://damp-journey-38779.herokuapp.com/user/?id=${email}`)
    let data = await res.json()
    console.log(data)
    // if(data.length == 0){
    //     temp.innerText = "Account Not Created! Please Create Account First!";
    //     temp.style.backgroundColor = "red";
    //   }
  }


