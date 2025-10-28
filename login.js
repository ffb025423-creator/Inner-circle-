// Signup
const signupForm = document.getElementById("signupForm");
const signupMsg = document.getElementById("signupMsg");
signupForm.addEventListener("submit", e => {
    e.preventDefault();
    const newUser = {
        name: document.getElementById("name").value.trim(),
        age: document.getElementById("age").value.trim(),
        class: document.getElementById("class").value.trim(),
        address: document.getElementById("address").value.trim(),
        school: document.getElementById("school").value.trim(),
        birthdate: document.getElementById("birthdate").value.trim(),
        hobby: document.getElementById("hobby").value.trim(),
        bio: document.getElementById("bio").value.trim(),
        ig: document.getElementById("ig").value.trim(),
        banned: false
    };
    users.push(newUser);
    saveUsers();
    signupMsg.textContent = "Signup successful! Now login below.";
    signupForm.reset();
});

// Login
const loginForm = document.getElementById("loginForm");
const loginMsg = document.getElementById("loginMsg");
loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const loginName = document.getElementById("loginName").value.trim();
    const foundUser = users.find(u => u.name.toLowerCase() === loginName.toLowerCase());
    if(foundUser){
        if(foundUser.banned){
            loginMsg.textContent = "Your account is banned!";
            return;
        }
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        window.location.href = "profile.html";
    } else {
        loginMsg.textContent = "User not found, please signup.";
    }
});