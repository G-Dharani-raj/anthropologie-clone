// basic importing appending components
import { admin_signup } from "../components/admin_login_compo.js";
function signupPage() {
  document.getElementById("container").innerHTML = admin_signup();
}
// signupPage()

//back to Wostyle button onclick
document.getElementById("backtomain").onclick = () => {
  location.href = "/index.html";
};

//login button onclick
document.getElementById("login_admin").onclick = () => {
  location.href = "/admin_login.html";
};

//signup function
document.getElementById("signup_button_admin").onclick = () => {
  signUp();
};

async function signUp() {
  let temp = document.getElementById("admin_massage_signup");
  let name = document.getElementById("admin_name").value;
  let email = document.getElementById("email_admin").value;
  let password = document.getElementById("password_admin").value;
  temp.innerText = "Please wait Loading...";
  temp.style.backgroundColor = "#ffe082";

  //checking email is right or not
  let dot = 0,
        at = 0,
        space = 0;
      for (let i = 0; i < email.length; i++) {
        if (email[i] == ".") {
          dot++;
        }
        if (email[i] == "@") {
          at++;
        }
        if (email[i] == " ") {
          space++;
        }
      }
    if(dot != 1){
        dot = true
    }else{
        dot = false
    }
    if(at != 1){
        at = true
    }else{
        at = false
    }
    if(space != 0){
        space = true
    }else{
        space = false
    }

//password strenth checking
let flagLength = false
if(!flagLength){
    if(password.length<8){
        flagLength = true;
    }
}

let remainFlag = false
if(!remainFlag){
    let count = 0, num = 0, lowercount = 0, uppercount = 0;
            for(let i = 0; i < password.length; i++){
                let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
                let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

                for(let j = 0; j < lower.length; j++){
                    if(lower[j] == password[i]){
                        lowercount++
                    }
                    if(upper[j] == password[i]){
                        uppercount++
                    }
                }
                if(password[i] == "!" || password[i] == "@" || password[i] == "#" || password[i] == "$" || password[i] == "%" || password[i] == "^" || password[i] == "&" || password[i] == "*" || password[i] == "+"){
                    count++
                }
                if(password[i] == "1" || password[i] == "2" || password[i] == "3" || password[i] == 4 || password[i] == 5 || password[i] == 6 || password[i] == 7 || password[i] == 8 || password[i] == 9 || password[i] == 0){
                    num++
                }
            }
        if(count == 0 || num == 0 || lowercount == 0 || uppercount == 0){
            remainFlag = true;
        }
}

  setTimeout(async () => {
    if (name == "" || email == "" || password == "") {
        console.log("yes1")
      temp.innerText = "Please Fill all Details!";
      temp.style.backgroundColor = "red";
    } else if(name.length<3){
        temp.innerText = "Please Enter Correct Full Name";
        temp.style.backgroundColor = "yellow";
    }else if (space){
        temp.innerText = "Please Remove Spaces from Email";
        temp.style.backgroundColor = "yellow";
    }else if(dot || at){
        temp.innerText = "Please Enter Email in correct format";
        temp.style.backgroundColor = "yellow";
    }else if(flagLength){
        temp.innerText = "Password Length should be more then 8";
        temp.style.backgroundColor = "red";
    }else if(remainFlag){
        temp.innerText = "Password should be combination lower, upper, number and spacial character";
        temp.style.backgroundColor = "red";
    }else{
        














        temp.innerText = "Registration successful! 🎉 redirecting...";
        temp.style.backgroundColor = "green";
    }
  }, 2000);
}
