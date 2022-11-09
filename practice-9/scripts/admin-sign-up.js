let login, password;
function adminAlerted() {
    login = prompt("Login: ");
    if (login === "admin") {
        password = prompt("Password: ");
        if (password === "pass") {
            alert("Successfully");
        }
        else {
            alert("Access denied");
        }
    }
    else {
        alert("No such user");
    }
}