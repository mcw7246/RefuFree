const users = {"local" : "password", "refugee": "password"}
var logged_in = false;


window.onclick = function(event){
    if(!event.target.matches('.dropdownButton')){
        var dropdowns = document.getElementsByClassName('dropdownMenu');
        for(var i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}
function authentication(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ((users[username] != undefined) && (password == users[username] )){
        var url = location.href;
        var newUrl = url.replace("/login.html", "/homepage.html");
        window.location.href = newUrl;
        logged_in = true;
    }
    else{
        console.log("Login unsuccessful.");
        var loginerror = document.createElement("p");
        var errorMessage = document.createTextNode("Login unsuccessful.");
        loginerror.appendChild(errorMessage);
        var element = document.getElementById("login");
        element.appendChild(loginerror);

        window.location = location.href;
    }
}

