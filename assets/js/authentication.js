const users = {"local" : "password", "refugee": "password"}
var logged_in = false;
function authentication(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ((users[username] != undefined) && (password == users[username] )){
        var url = location.href;
        var newUrl = url.replace("/login.html", "/homepage.html");
        logged_in = true;
        console.log(newUrl)
        return window.location.replace(newUrl);
        
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