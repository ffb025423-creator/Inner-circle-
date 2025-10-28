// LocalStorage Handling
let users = JSON.parse(localStorage.getItem("senpaiUsers")) || [];
let vipUser = JSON.parse(localStorage.getItem("senpaiVIP")) || null;

// Save Users
function saveUsers() {
  localStorage.setItem("senpaiUsers", JSON.stringify(users));
}

// Save VIP
function saveVIP() {
  localStorage.setItem("senpaiVIP", JSON.stringify(vipUser));
}