
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


function mostraMapa(lat,long){
   L.mapquest.key = '	xdsmDVxAR0Z0PtG3xtnX8cPXsuNxwkA9';
        var map = L.mapquest.map('map', {
          center: [lat,long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 17
        });

   L.marker([lat, long],{
          icon: L.mapquest.icons.marker (),
          draggable: false
        }).bindPopup('Peruibe, SP' ).addTo(map) ;

        map.addControl(L.mapquest.control());

      L.circle([lat,long], { radius: 20 }).addTo(map);

}


$(document).on("click","#local" ,function(){
 var onSuccess = function(position) {
   mostraMapa(position.coords.latitude,position.coords.longitude )
      
             // 'Altitude: '          + position.coords.altitude          + '\n' +
             // 'Accuracy: '          + position.coords.accuracy          + '\n' +
             // 'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
             // 'Heading: '           + position.coords.heading           + '\n' +
             // 'Speed: '             + position.coords.speed             + '\n' +
             // 'Timestamp: '         + position.timestamp                + '\n');
};
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});
