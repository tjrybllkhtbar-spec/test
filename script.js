function copycamera(){
    var camera = document.getElementById("camera");
    camera.select()
    navigator.clipboard.writeText(camera.value)
    messagepop()
}

function copylocation(){
    var location = document.getElementById("location");
    location.select()
    navigator.clipboard.writeText(location.value)
    messagepop()
}

function copyinformation(){

    var information = document.getElementById("information");

    information.select()
    navigator.clipboard.writeText(information.value)
    messagepop()
}


function messagepop(){

    message = document.getElementById("span")
    message.style.opacity="1";
    setTimeout(function(){
        message.style.opacity="0";
    },1000)
}