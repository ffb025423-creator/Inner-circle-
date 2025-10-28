const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(currentUser){
    document.getElementById("profileName").textContent = currentUser.name;
    document.getElementById("profileAge").textContent = currentUser.age;
    document.getElementById("profileClass").textContent = currentUser.class;
    document.getElementById("profileAddress").textContent = currentUser.address;
    document.getElementById("profileSchool").textContent = currentUser.school;
    document.getElementById("profileBirthdate").textContent = currentUser.birthdate;
    document.getElementById("profileHobby").textContent = currentUser.hobby;
    document.getElementById("profileBio").textContent = currentUser.bio;
    const igLink = document.getElementById("profileIG");
    igLink.href = currentUser.ig || "#";
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", ()=>{
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
});

// Edit profile (only age, class, school, IG, bio)
const editForm = document.getElementById("editProfileForm");
editForm.addEventListener("submit", e=>{
    e.preventDefault();
    const usersData = JSON.parse(localStorage.getItem("senpaiUsers")) || [];
    const index = usersData.findIndex(u=>u.name === currentUser.name);
    if(index>-1){
        if(document.getElementById("editAge").value) usersData[index].age = document.getElementById("editAge").value;
        if(document.getElementById("editClass").value) usersData[index].class = document.getElementById("editClass").value;
        if(document.getElementById("editSchool").value) usersData[index].school = document.getElementById("editSchool").value;
        if(document.getElementById("editIG").value) usersData[index].ig = document.getElementById("editIG").value;
        if(document.getElementById("editBio").value) usersData[index].bio = document.getElementById("editBio").value;
        localStorage.setItem("senpaiUsers", JSON.stringify(usersData));
        localStorage.setItem("currentUser", JSON.stringify(usersData[index]));
        alert("Profile updated successfully!");
        location.reload();
    }
});