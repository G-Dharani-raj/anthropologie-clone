// Code here
    document.querySelector("#signinimg").addEventListener("click",code)
    document.querySelector("#signin").addEventListener("click",code)
    
    function code(){
        let signin=document.getElementById("signin_signup_form")
        let signup=document.getElementById("signuppage");
        let container=document.getElementById("container")
        signin.style.visibility="visible"
        signin.style.display="block"
        container.style.position="fixed"
        container.style.filter="blur(2px)"
        document.querySelector("mobilenumber").addEventListener("click",numbersignin)
        function numbersignin(){
            signin.style.visibility="visible"
            signin.style.display="block"
            signup.style.visibility="visible"
            signup.style.display="block"

        }
        document.querySelector("createanaccount").addEventListener("click",signupform)
        function signupform(){
            signup.style.visibility="visible"
            signup.style.display="block"
            signin.style.visibility="hidden"
            signin.style.display="none"
        }

    }
