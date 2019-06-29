var contador = window.localStorage;
contador.setItem("tickets",0);

function sumarContador(){
    alert("hola")
    var cantidadTicket = contador.getItem("tickets");
    cantidadTicket ++;
    document.getElementById("ticket").innerHTML = cantidadTicket;
    contador.setItem("tickets",cantidadTicket);
}
function restarContador(){
    var cantidadTicket = contador.getItem("tickets");
    cantidadTicket --;
    contador.setItem("tickets",cantidadTicket);
}

window.onload = () => {
    document.getElementById("comprar").addEventListener("click", sumarContador());
}
