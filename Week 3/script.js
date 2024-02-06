function processFormData() {
    let form = document.getElementById('myForm');

    let fullName = form.elements.fullName.value;
    let email = form.elements.email.value;
    let receiveDate = form.elements.date.value;
    let message = form.elements.message.value;

    // Insert data into the table with a predefined function (you need to implement this function)
    insertData(fullName, email, receiveDate, message);

    // Clear the form fields
    clearFormData();
}

function insertData(fullName, email, receiveDate, message) {
    // Implement this function to insert data into a table or perform any desired action
    console.log("Inserting data:", fullName, email, receiveDate, message);
}

function clearFormData() {
    // Implement this function to clear form fields
    document.getElementById('myForm').reset();
}
