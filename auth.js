

class User{
    constructor(){

    }validateEmail(email){
      if(email.includes("@")){
        return true;
      }else{
        return false;
      }
    }validatePassword(password){
       if(password.length>5){
        return true
       }else{
        return false
       }
    }
    async signUP(n,e,u,m,p,d){
         let isValidate =this.validateEmail(e)&&this.validatePassword(p);
         if(isValidate){
            this.name=n;
            this.email=e;
            this.username=u;
            this.mobile=m;
            this.password=p;
            this.description=d;
            
            const register_api='https://masai-api-mocker.herokuapp.com/auth/register'
            const response=await fetch(register_api,{
                method:'POST',
                body: JSON.stringify(this),
                headers:{
                    'Content-Type':'application/json',
                },
            });
            const data= await response.json();
            console.log("data:",data);
         }
        }
         
}
let user= new User()
const Register=()=>{
    const reg_form=document.getElementById('signupform1')
    const names="dummy"
    const emails=reg_form.emailsignup.value
    const usernames=reg_form.namesignup.value
    const mobiles=reg_form.mobilenumbersignup.value
    const passwords=reg_form.passwordsignup.value
    const descriptions="dummy";
    user.signUP(names,emails,usernames,mobiles,passwords,descriptions)
    console.log("user:",user)
  

}


document.getElementById("nextsignuppage").addEventListener("click",Register)

