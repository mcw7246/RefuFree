function changeMode(){
    var button = document.getElementById("saveEdit");
    var mode = button.innerText;
    if(mode == "Edit"){
        button.innerText = "Save";
        
    }
}