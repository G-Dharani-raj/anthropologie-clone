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

  //alert!!!!!!
  let temp = document.getElementById("admin_massage_signup");

  async function logIn(){
    
    let email = document.getElementById("email_admin").value;
    let passcode = document.getElementById("password_admin").value;
    let checkbox = document.getElementById("checkbox_admin").checked
    if(checkbox == true){
        localStorage.setItem("admin_stay_logged", checkbox)
    }else{
        localStorage.setItem("admin_stay_logged", checkbox)
    }
    temp.innerText = "Please wait Login in...";
    temp.style.backgroundColor = "#ffe082";
    try{
        let res = await fetch(`https://damp-journey-38779.herokuapp.com/user/?id=${email}`)
    let data = await res.json()
    let pass = data[0].password
    let name = data[0].name
    console.log(pass)
    if(data.length == 0){
        temp.innerText = "Account Not Created! Please Create Account First!";
        temp.style.backgroundColor = "red";
    }else{
       if(pass == passcode){
        temp.innerText = "Logged In! 🎉 Redirecting to Dashboard...";
        temp.style.backgroundColor = "green";
        localStorage.setItem("admin_name", JSON.stringify(name))
        setTimeout(()=>{
            location.href = "/admin_dashboard.html"
        },3000)
       }else{
        temp.innerText = "Please enter correct Password";
        temp.style.backgroundColor = "red";
       }
    }
    }
    catch(err){
        console.log(err)
    }
  }


//already logged redirecting user to dashboard
if(localStorage.getItem("admin_stay_logged") == "true"){
    temp.innerText = "You are Already Logged! Redirecting...";
    temp.style.backgroundColor = "green";
    setTimeout(() => {
        location.href = "/admin_dashboard.html"
    }, 2000);
};


