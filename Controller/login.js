function validateForm(event) {
    
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    
    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        event.preventDefault(); 
        return false;
    }

    
    if (password.length < 5) {
        alert("Password must be at least 5 characters long.");
        event.preventDefault();
        return false;
    }

    
    return true;
}
