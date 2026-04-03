// session.js

(function(){

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const expiry = localStorage.getItem("expiry");

    if(isLoggedIn !== "true" || Date.now() > expiry){
        localStorage.clear();
        window.location.href = "auth.html";
        return;
    }

    const username = localStorage.getItem("username");
    const panel = localStorage.getItem("panel");
    const country = localStorage.getItem("country");
    const refresh = localStorage.getItem("refresh");

    const topbar = document.getElementById("topbar");

    if(topbar){
        topbar.innerHTML = `
        Panel: ${panel} |
        User: ${username} |
        Country: ${country} |
        Refresh: ${refresh}
        <button onclick="logout()" class="logout-btn">Logout</button>
        `;
    }

    window.logout = function(){
        localStorage.clear();
        window.location.href = "auth.html";
    };

})();
