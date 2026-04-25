// SUPABASE CONFIG
const SUPABASE_URL = "https://yfofeoxkkghhxrumzkpb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmb2Zlb3hra2doaHhydW16a3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwOTk2MzAsImV4cCI6MjA5MjY3NTYzMH0.tAFm_Qlg-3Kt3r5WE6qQepozS2jnzY7Y1t_fIHPazlE";

// Web3Forms key
const WEB3FORMS_KEY = "8b1d3932-20db-43c9-be47-8b101fe5d4f9";

async function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

// 1. SUPABASE LOGIN
let res = await fetch(SUPABASE_URL + "/auth/v1/token?grant_type=password", {
method: "POST",
headers: {
"Content-Type": "application/json",
"apikey": SUPABASE_ANON_KEY
},
body: JSON.stringify({
email: email,
password: password
})
});

let data = await res.json();

if(data.error){
alert("Login failed!");
return;
}

// 2. OPTIONAL: LOG LOGIN EVENT TO YOU
fetch("https://api.web3forms.com/submit", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
access_key: WEB3FORMS_KEY,
subject: "🔐 OpenionBD Login",
message: `
A user logged in:

Email: ${email}
Time: ${new Date().toLocaleString()}
`
})
});

localStorage.setItem("user", JSON.stringify(data));

alert("Login successful!");
window.location.href = "index.html";

}
