function changeMode(){
    var button = document.getElementById("saveEdit");
    var mode = button.innerText;
    if(mode == "Edit"){
        button.innerText = "Save";
        var textboxes = document.getElementsByClassName("userInput");
        for(var i = 0; i < textboxes.length; i++){
            textboxes[i].readOnly = false;
        }
    }
    else{
        button.innerText = "Edit";
        var textboxes = document.getElementsByClassName("userInput");
        for(var i = 0; i < textboxes.length; i++){
            textboxes[i].setAttribute("readOnly", "true");
        }
    }
}