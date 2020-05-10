
$(document).on("click","#alerta" ,function(){
 function retorno(){

// Trecho da Web em destaque
// Callback é uma função que é usada como "callback". Ela é tipicamente passada como argumento de outra função e/ou chamada quando um evento for acontecido, ou quando uma parte de código receber uma resposta de que estava à espera.
 }
 //ou coloco null-->onde esta: retorno 
navigator.notification.alert("My mensagem",retorno,"Aviso","Aceito");

});

$(document).on("click","#confirma" ,function(){
 function confirma(butonIndex){
navigator.notification.confirm(butonIndex);
if(butonIndex==1){
  navigator.notification.alert("Poxa escolheu opção A");
}else{
    navigator.notification.alert("Poxa escolheu opção B");
}
 }

navigator.notification.confirm("Escolha A ou B",confirma,"Escolha",['A','B']);

});

$(document).on("click","#beep" ,function(){
 function retorno(){
 }

navigator.notification.beep(3);

});

$(document).on("click","#vibra" ,function(){
navigator.vibrate(3000);
});




