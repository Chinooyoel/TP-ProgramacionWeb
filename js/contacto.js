
$(document).ready(function(){
    $("#car").html(0);
    $("#parrafo").keyup(function(){
        var tam = Object.keys(this.value).length;
        $("#car").html(tam);
        if(tam >= 1000){
            $("#car").css("color","red");
        }else{
            $("#car").css("color","black");
        }
    });
    $("#validar").click(function(evn){
        
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val(); 
        var mail = $("#mail").val(); 
        var tel = $("#tel").val(); 
        var par = $("#parrafo").val(); 
        var mje = "";
        var salida = true;
        if(nombre.length == 0){
            mje = mje.concat("<p>* Debe completar el campo nombre</p>");  
            salida = false;  
        }
        if(apellido.length == 0){
            mje = mje.concat("<p>* Debe completar el campo apellido</p>");  
            salida = false; 
        }
        // Validar con Jquery
        if ( mail.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)== null ) {
            mje = mje.concat("<p>* Mail no valido (Jquery)</p>");
            salida = false;
        }
        // Validar con JavaScript
        var reg = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
        if(reg.test(mail) == false){
            mje = mje.concat("<p>* Mail no valido (JavaScript)</p>");
            salida = false;
        }
        if(tel.length != 0){
            if(tel.match(/^[0-9]{4,4}-[0-9]{4,4}$/) == null){
                mje = mje.concat("<p>* Telefono debe tener 8 dígitos con el siguiente formato NNNN-NNNN</p>");
                salida = false;
            }  
        }
          
        if(par.length >= 1000){
            mje = mje.concat("<p>* El texto supera los 1000 caracteres</p>");
            salida = false;
        }
        if(salida == false){
            evn.preventDefault;   
            $("#errores").html(mje); 
        }else{
            $("#errores").html(""); 
            var body = "El usuario "+nombre+" "+apellido+"("+tel+") ha enviado el siguiente mail:\n";
            body = body.concat(par);
            window.open('mailto:'+mail+'?subject=mailContacto&body='+body);
        }
            
    });
  
  });
