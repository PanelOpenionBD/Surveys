// signup.js

function signup(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "" || password === ""){
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("acc_username", username);
    localStorage.setItem("acc_password", password);

    alert("Account created! Please login.");
    window.location.href = "auth.html";
}
