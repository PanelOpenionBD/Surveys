// auth.js

function generatePanelCode(){
    return "panel-" + Math.floor(Math.random() * 1000000);
}

function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const savedUser = localStorage.getItem("acc_username");
    const savedPass = localStorage.getItem("acc_password");

    if(username === savedUser && password === savedPass){

        const panel = generatePanelCode();
        const country = navigator.language || "en-US";
        const refresh = "01";
        const expiry = Date.now() + (24 * 60 * 60 * 1000);

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        localStorage.setItem("panel", panel);
        localStorage.setItem("expiry", expiry);
        localStorage.setItem("country", country);
        localStorage.setItem("refresh", refresh);

        window.location.href =
        `dashboard.html?${panel}?accountfrom-${username}?${country}?refresh-${refresh}`;

    } else {
        alert("Invalid username or password");
    }
}

// Prevent going back to login
(function(){
    if(localStorage.getItem("isLoggedIn") === "true"){
        if(Date.now() < localStorage.getItem("expiry")){
            window.location.href = "dashboard.html";
        }
    }
})();
