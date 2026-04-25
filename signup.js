// SUPABASE CONFIG (replace later)
const SUPABASE_URL = "https://yfofeoxkkghhxrumzkpb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_9Ey1FSAF2sNSW24wSiA5Vw_WC1cB9dr";

// Web3Forms key (replace later)
const WEB3FORMS_KEY = "8b1d3932-20db-43c9-be47-8b101fe5d4f9";

async function signup() {

let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;
let district = document.getElementById("district").value;
let phone = document.getElementById("phone").value;
let referral = document.getElementById("referral").value;

if(password !== confirmPassword){
alert("Passwords do not match!");
return;
}

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

// 2. SEND EMAIL TO YOU VIA WEB3FORMS
await fetch("https://api.web3forms.com/submit", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
access_key: WEB3FORMS_KEY,
subject: "New OpenionBD Signup",
message: `
New user signed up:

Username: ${username}
Email: ${email}
District: ${district}
Phone: ${phone}
Referral: ${referral}
`
})
});

alert("Signup successful! Check email to verify.");
window.location.href = "auth.html";

}
