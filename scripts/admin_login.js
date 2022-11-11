// basic importing appending components
import {admin_login} from "../components/admin_login_compo.js"

function loginPage(){
    document.getElementById("container").innerHTML = admin_login()
}
loginPage()


//back to Wostyle button onclick
document.getElementById("backtomain").onclick = ()=>{
    location.href = "/index.html";
}

//create account button onclick
document.getElementById("create_admin").onclick = ()=>{
    location.href = "/admin_signup.html";
}


