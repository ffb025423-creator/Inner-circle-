const vipBtn = document.getElementById("vipBtn");

vipBtn.addEventListener("click", ()=>{
    const vipPass = prompt("Enter VIP Pass:");
    if(vipPass === "0987654321"){
        const vipContainer = document.createElement("div");
        vipContainer.className = "vip-login-modal";
        vipContainer.innerHTML = `
            <h2>VIP Login</h2>
            <input type="text" id="vipName" placeholder="Owner/Admin Name">
            <input type="password" id="vipPass" placeholder="Password">
            <button id="vipLoginBtn">Login</button>
        `;
        document.body.appendChild(vipContainer);

        document.getElementById("vipLoginBtn").addEventListener("click", ()=>{
            const name = document.getElementById("vipName").value.trim();
            const pass = document.getElementById("vipPass").value.trim();
            if((name==="Sami" && pass==="7854818601") || (name==="Jannat" && pass==="maher_islam")){
                alert("VIP Login Success!");
                localStorage.setItem("vipUser", JSON.stringify({name:name}));
                window.location.href = "vip-dashboard.html";
            } else alert("Invalid VIP credentials!");
        });
    } else alert("Wrong VIP Pass!");
});

// VIP Dashboard functionality example
if(window.location.pathname.includes("vip-dashboard.html")){
    const currentVIP = JSON.parse(localStorage.getItem("vipUser"));
    if(!currentVIP){
        alert("Access Denied!");
        window.location.href = "index.html";
    }
    // Example search users
    const searchInput = document.getElementById("searchUser");
    const resultsDiv = document.getElementById("searchResults");
    searchInput.addEventListener("input", ()=>{
        const val = searchInput.value.toLowerCase();
        const allUsers = JSON.parse(localStorage.getItem("senpaiUsers")) || [];
        resultsDiv.innerHTML = "";
        allUsers.filter(u=>u.name.toLowerCase().includes(val)).forEach(u=>{
            const div = document.createElement("div");
            div.className="user-card";
            div.innerHTML=`<p>${u.name}</p>`;
            resultsDiv.appendChild(div);
        });
    });
}