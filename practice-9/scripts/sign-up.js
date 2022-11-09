let result;
while (true) {
    result = prompt("Want to sign up?", "Yes");
    if (result === "Yes") {
        alert("Great!");
        break;
    } else if (result.toLowerCase() === "no") {
        alert("Are you sure? Check out again the benefits of studying with us!");
        window.location.href = 'index.html';
        break;
    }
    else
        alert("Try again");
}
