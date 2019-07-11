

$(document).ready(function(){
    var miStorage = window.localStorage;
    var cantidadTicket = miStorage.getItem("tickets");
    $("#tickets_comprados").html(cantidadTicket);
    $(".inscribir").click(function(evn){
        sumarContador();
    });
});



function sumarContador(){
    var miStorage = window.localStorage;
    var cantidadTicket = miStorage.getItem("tickets");
    cantidadTicket ++;
    document.getElementById("tickets_comprados").innerHTML = cantidadTicket;
    miStorage.setItem("tickets",cantidadTicket);
}

function ponerEnCeroElContador(){
    var miStorage = window.localStorage;
    miStorage.setItem("tickets", 0);
    document.getElementById("tickets_comprados").innerHTML = cantidadTicket;
}
function restarContador(){
    var miStorage = window.localStorage;
    var cantidadTicket = miStorage.getItem("tickets");
    cantidadTicket --;
    document.getElementById("tickets_comprados").innerHTML = cantidadTicket;
    miStorage.setItem("tickets",cantidadTicket);
}
