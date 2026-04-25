const SUPABASE_URL = "https://yfofeoxkkghhxrumzkpb.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmb2Zlb3hra2doaHhydW16a3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwOTk2MzAsImV4cCI6MjA5MjY3NTYzMH0.tAFm_Qlg-3Kt3r5WE6qQepozS2jnzY7Y1t_fIHPazlE";

const WEB3FORMS_KEY = "8b1d3932-20db-43c9-be47-8b101fe5d4f9";

async function signup(){

let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

// 1. SUPABASE SIGNUP
let res = await fetch(SUPABASE_URL + "/auth/v1/signup", {
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
alert(data.error.message);
return;
}

// 2. EMAIL NOTIFICATION (Web3Forms)
fetch("https://api.web3forms.com/submit", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
access_key: WEB3FORMS_KEY,
subject: "🔥 New OpenionBD Signup",
message: `
Username: ${username}
Email: ${email}
`
})
});

alert("Signup successful! Check your email for verification.");
window.location.href = "auth.html";

}
