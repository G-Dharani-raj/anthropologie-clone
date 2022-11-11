const admin_login = ()=>{
    return `<input type="email" name="email" id="email_admin" placeholder="Email">
    <input type="password" name="password" id="password_admin" placeholder="Password">
    <input type="checkbox" name="checkbox" id="checkbox_admin">
    <label for="checkbox">Remember me (till localStorage not clear 😎)</label>
    <button id="login_button_admin">Log In</button>
    <div id="forget_create">
        <p id="forget_admin">Forget your password?</p>
        <p id="create_admin">Create an account</p>
    </div>`
}

const admin_signup = ()=>{
    return `<input type="text" name="name" id="admin_name" placeholder="Full Name">
    <input type="email" name="email" id="email_admin" placeholder="Email">
    <input type="password" name="password" id="password_admin" placeholder="Password">
    <button id="signup_button_admin">Complate Registration</button>
    <div id="forget_create">
        <p id="forget_admin">Forget your password?</p>
        <p id="login_admin">Login</p>
    </div>
    <p>-View our <span id="pripolicy">Privacy Policy</span></p>
    <p>-By Registring on our site you're accepting our <span id="terms">terms and conditions</span></p>`
}

export {admin_login, admin_signup}