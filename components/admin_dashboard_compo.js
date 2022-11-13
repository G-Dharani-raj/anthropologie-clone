//for cloths and shoes dashboard
const adminDashboard = ()=>{
    return `<div id="admin_navbar">
    <div>
        <a id="cloth_butt_admin" href="/admin_dashboard.html">Cloths</a>
        <a id="shoes_butt_admin" href="/admin_shoes.html">Shoes</a>
    </div>
    <div>
        <h2>WoStyle Dashboard</h2>
    </div>
    <div>
        <button id="backtomain_dashboard">Back to <span id="back_to_wostyle">wostyle.com</span></button>
        <button id="admin_logout">logout</button>
    </div>
</div>
<div id="add_prodcut">
    <input type="text" name="name" id="dashboard_addprod_name" placeholder="Name">
    <input type="number" name="price" id="price_addprod" placeholder="price">
    <select name="category" id="category_admin_addprod">
        <option value="">select category</option>
        <option value="dress">Dress</option>
        <option value="shoes">Shoes</option>
        <option value="dress">Clohting</option>
    </select>
    <input type="url" name="url_dashboard" id="image_dashboard_addprod" placeholder="Image URL">
    <button id="addprod_button_dashboard">Add Product</button>
    <p id="dashboard_prodadded_massage"></p>`
}

export { adminDashboard }