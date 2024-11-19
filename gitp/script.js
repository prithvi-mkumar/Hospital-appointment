// Simple form validation script
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let symptoms = document.getElementById('symptoms').value;

    if (name === "" || email === "" || date === "" || time === "" || symptoms === "") {
        alert("Please fill in all fields before submitting.");
        return false;
    }
    
    alert("Your appointment has been successfully booked!");
    return true;
}