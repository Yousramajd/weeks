function processFormData() {
    let form = document.getElementById('myForm');

    let restaurantName = form.elements.restaurantName.value;
    let rating = form.elements.rating.value;
    let price = form.elements.price.value;
    insertData(restaurantName, rating, price);
    clearFormData();
}

function insertData(restaurantName, rating, price) {
    let table = document.getElementById('dataTable');
    let newRow = table.insertRow(-1);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = restaurantName;
    cell2.innerHTML = rating;
    cell3.innerHTML = price;
}

function clearFormData() {
    let form = document.getElementById('myForm');
    form.reset();
}
