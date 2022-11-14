document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

document.getElementById("submit-btn").addEventListener("click",openPopup)

let popup=document.getElementById("popup");

function openPopup(event){
    event.preventDefault();
    localStorage.setItem("cart_items",JSON.stringify("[]"))
    localStorage.setItem("cart_show_btn",JSON.stringify(0))
    setTimeout(()=>{
        window.location="index.html"
    },1000)
    popup.classList.add("open-popup");
    
    
    
}

// document.getElementById("homeButton").onclick=()=>{
//     window.location="index.html";
// }

let customerData=JSON.parse(localStorage.getItem("customer_data"))||[];




