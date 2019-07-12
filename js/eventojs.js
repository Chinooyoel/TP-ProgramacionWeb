$(document).ready(function(){
   $("input[name=fuente]").change(function(){
    $("#titulo").css("font-size",this.value+"px")
   }
   )

   $("input[name=color]").change(function(){
    $("#titulo").css("color",this.value)
   })

   $("input[name=color]").change(function(){
    $("#titulo").css("color",this.value)
   })

   $("input[name=color_fondo]").change(function(){
    $(".imagen_re").css("background-color",this.value)
   })
   $("input[name=subtitulo]").change(function(){
       if(this.value == 1 ){
        $(".imagen_re").css("align-items","flex-end");
        $(".imagen_re").css("justify-content","flex-end");
       }else if(this.value == 2){
        $(".imagen_re").css("align-items","start");
        $(".imagen_re").css("justify-content","flex-start");
       }else{
        $(".imagen_re").css("align-items","start");
        $(".imagen_re").css("justify-content","flex-end");
       }
    
   })

   
   $("#editar_titulo").keyup(function(){
    $("#titulo").html(this.value);
   })

   $("#data_time").change(function(){
    $("#date_img").html(this.value.replace("T", "   "));
   })

   
 
})