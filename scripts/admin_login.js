// basic importing appending components
import { admin_login } from "../components/admin_login_compo.js";

function loginPage() {
	document.getElementById("container").innerHTML = admin_login();
}
loginPage();

//back to Wostyle button onclick
document.getElementById("backtomain").onclick = () => {
	location.href = "/index.html";
};

//create account button onclick
document.getElementById("create_admin").onclick = () => {
	location.href = "/admin_signup.html";
};

//calling login function
document.getElementById("login_button_admin").onclick = () => {
	logIn();
};

//alert!!!!!!
let temp = document.getElementById("admin_massage_signup");

//login function
async function logIn() {
	let email = document.getElementById("email_admin").value;
	let passcode = document.getElementById("password_admin").value;
	let checkbox = document.getElementById("checkbox_admin").checked;
	if (checkbox == true) {
		localStorage.setItem("admin_stay_logged", checkbox);
	} else {
		localStorage.setItem("admin_stay_logged", checkbox);
	}
	temp.innerText = "Please wait Login in...";
	temp.style.backgroundColor = "#ffe082";
	try {
		let res = await fetch(
			`https://mock-api-4u7p.onrender.com/user/?id=${email}`
		);
		let data = await res.json();
		console.log(data);
		let pass = data[0].password;
		let name = data[0].name;
		console.log(pass);
		if (data.length == 0) {
			temp.innerText =
				"Account Not Created! Please Create Account First!";
			temp.style.backgroundColor = "red";
		} else {
			if (pass == passcode) {
				temp.innerText = "Logged In! 🎉 Redirecting to Dashboard...";
				temp.style.backgroundColor = "green";
				localStorage.setItem("admin_name", JSON.stringify(name));
				setTimeout(() => {
					location.href = "/admin_dashboard.html";
				}, 3000);
			} else {
				temp.innerText = "Please enter correct Password";
				temp.style.backgroundColor = "red";
			}
		}
	} catch (err) {
		console.log(err);
	}
}

//already logged redirecting user to dashboard
if (localStorage.getItem("admin_stay_logged") == "true") {
	temp.innerText = "You are Already Logged! Redirecting...";
	temp.style.backgroundColor = "green";
	setTimeout(() => {
		location.href = "/admin_dashboard.html";
	}, 2000);
}

//forget password button
document.getElementById("forget_admin").onclick = () => {
	let email = prompt("Please enter your Email");
	if (email != null) {
		let pass = prompt("Please Enter your New Password");
		if (pass != null) {
			updatePass(email, pass);
		}
	}

	async function updatePass(email, pass) {
		try {
			let send_this_data = {
				password: pass,
			};

			let res = await fetch(
				`https://mock-api-4u7p.onrender.com/user/${email}`,
				{
					method: "PATCH",
					body: JSON.stringify(send_this_data),
					headers: {
						"COntent-Type": "application/json",
					},
				}
			);
			let data = await res.json();
			alert("Your Password is reseted!");
		} catch (err) {
			console.log(err);
		}
	}
};
