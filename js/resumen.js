$(document).ready(function(){
  $(".inputs").change(function(){
    var i = 0;
    var unit = $(this).val(); 
    $(this).parent().parent().children().each(function(){
      if(i == 3){
        cant = $(this).text();
      }else if(i== 5){
        $(this).children().val(unit*cant)  ;
      }
      i++;
    });
    i = 0;
    var sumar = 0
    var i = $("tr td:last-child").toArray().length -1;
    $("tr td:last-child").each(function(){
      if(i > 0){
       sumar += parseInt($(this).children().val(),10);
      }
      i--;
     
    })
    $("#total").html(sumar);
  })
})