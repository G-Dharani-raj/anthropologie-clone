
import {sign as add} from '../components/sign.js';
let sign_div=document.getElementById("signin/signup")
sign_div.innerHTML=add()






    document.querySelector("#signin_signup").addEventListener("click",code)
    document.querySelector("#emailid").addEventListener("click",code)
document.querySelector("#signupsignin").addEventListener("click",code)
    let signin=document.getElementById("signin_signup_form")
        let signup=document.getElementById("signuppage");
        let numbersign=document.getElementById("signinnumber")
        let container=document.getElementById("container")
    function code(){
        
        signin.style.visibility="visible"
        signin.style.display="block"
        signup.style.visibility="hidden"
        signup.style.display="none"
        container.style.position="fixed"
        container.style.filter="blur(2px)"
        numbersign.style.visibility="hidden"
        numbersign.style.display="none"

         document.querySelector("#mobilenumber").addEventListener("click",numbersignin)
    document.querySelector("#createanaccount").addEventListener("click",signuppage)
    function numbersignin(){
        numbersign.style.visibility="visible"
        numbersign.style.display="block"
        signin.style.visibility="hidden"
        signin.style.display="none"
        

    }function signuppage(){
        signup.style.visibility="visible"
        signup.style.display="block"
        numbersign.style.visibility="hidden"
        numbersign.style.display="none"
        signin.style.visibility="hidden"
        signin.style.display="none"

    }
}