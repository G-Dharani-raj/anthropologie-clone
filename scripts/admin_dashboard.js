//admin_name (for checking login or not and then showing data on dashboard)

async function getDataHeroku() {
  try {
    let res = await fetch("https://damp-journey-38779.herokuapp.com/dress/");
    let data = await res.json();
    console.log(data)
    appedData(data);
  } catch (err) {
    console.log(err);
  }
}
getDataHeroku()

document
  .getElementById("addprod_button_dashboard")
  .addEventListener("click", addProd);

async function addProd() {
  let name = document.getElementById("dashboard_addprod_name").value;
  let price = document.getElementById("price_addprod").value;
  let category = document.getElementById("category_admin_addprod").value;
  let url = document.getElementById("image_dashboard_addprod").value;

  let newData = {
    name: name,
    price: price,
    category: category,
    image: url,
  };

  try {
    res = await fetch(`https://damp-journey-38779.herokuapp.com/${category}/`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await fetch(`https://damp-journey-38779.herokuapp.com/products/`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
    document.getElementById("dashboard_prodadded_massage").innerText =
      "Item Has Been Added...";
      cutomAppend(data)
      document.getElementById("dashboard_addprod_name").value = null;
      document.getElementById("price_addprod").value = null;
      document.getElementById("category_admin_addprod").value = null;
      document.getElementById("image_dashboard_addprod").value = null;
    setTimeout(() => {
      document.getElementById("dashboard_prodadded_massage").innerText = "";

    }, 3000);
  } catch (err) {
    console.log(err);
  }
}

function appedData(data) {
  document.getElementById("list_prod_dashboard").innerHTML = "";
  data.forEach((element) => {
    let card = document.createElement("div");

    let image = document.createElement("img");
    image.src = element.image;

    let name = document.createElement("h3");
    name.innerText = element.name;

    let price = document.createElement("h5");
    price.innerText = `$${element.price}.0`;
    price.setAttribute("id", `price${element.id}`)


    let temp = document.createElement("div");
    temp.append(name, price);

    let delete_button = document.createElement("button");
    delete_button.classList = "delete_butt_admin_dashboard";
    delete_button.innerText = "Delete Item";
    delete_button.onclick = () =>{
        deleteProduct(element)
    }

    let updatebox = document.createElement("input");
    updatebox.type = "number";
    updatebox.placeholder = "update price";
    updatebox.setAttribute('id', `item_number${element.id}`)


    let upadtebutt = document.createElement("button");
    upadtebutt.innerText = "☑️";
    // upadtebutt.classList = "upadtebutt"
    upadtebutt.onclick = ()=>{
      updatePrice(element)
    }

    let temp2 = document.createElement("div");
    temp2.append(delete_button, updatebox, upadtebutt);
    temp2.classList = "dashboard_addprod_buttons"

    card.append(image, temp, temp2);

    document.getElementById("list_prod_dashboard").append(card);
  });
}

function cutomAppend(element){
    let card = document.createElement("div");

    let image = document.createElement("img");
    image.src = element.image;

    let name = document.createElement("h3");
    name.innerText = element.name;

    let price = document.createElement("h5");
    price.innerText = `$${element.price}.0`;
    price.setAttribute("id", `price${element.id}`)


    let temp = document.createElement("div");
    temp.append(name, price);

    let delete_button = document.createElement("button");
    delete_button.classList = "delete_butt_admin_dashboard";
    delete_button.innerText = "Delete Item";
    delete_button.onclick = () =>{
        deleteProduct(element)
    }

    let updatebox = document.createElement("input");
    updatebox.type = "number";
    updatebox.placeholder = "update price";
    updatebox.setAttribute('id', `item_number${element.id}`)


    let upadtebutt = document.createElement("button");
    upadtebutt.innerText = "☑️";
    // upadtebutt.classList = "upadtebutt"
    upadtebutt.onclick = ()=>{
      updatePrice(element)
    }

    let temp2 = document.createElement("div");
    temp2.append(delete_button, updatebox, upadtebutt);
    temp2.classList = "dashboard_addprod_buttons"

    card.append(image, temp, temp2);

    document.getElementById("list_prod_dashboard").append(card);
  };


async function deleteProduct(element){
    let deleteID = element.id
    try{
        let res = await fetch(`https://damp-journey-38779.herokuapp.com/dress/${deleteID}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        getDataHeroku()
    }
    catch(err){
        console.log(err)
    }
}

async function updatePrice(element){
  try{
    let prod_id = element.id;
    let new_price = document.getElementById(`item_number${prod_id}`).value;
    console.log(new_price)
    let send_this_data = {
        price: new_price,
    }

    let res = await fetch(`https://damp-journey-38779.herokuapp.com/dress/${prod_id}`, {
        method: "PATCH",
        body: JSON.stringify(send_this_data),
        headers:{
            "COntent-Type": "application/json"
        }
    })
    let data = await res.json();
    document.getElementById(`price${element.id}`).innerText = `$${data.price}`
    document.getElementById(`item_number${prod_id}`).value = null
    console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

//back to Wostyle button onclick
document.getElementById("backtomain_dashboard").onclick = ()=>{
  location.href = "/index.html";
}


document.getElementById("admin_logout").onclick = ()=>{
  localStorage.setItem("admin_stay_logged", false)
  location.href = "/admin_login.html";
}
