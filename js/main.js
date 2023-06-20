$('.carousel').carousel({
	interval:1500,
	pause:"hover"
})

$(document).ready(function() {
  // Obtiene el hash de la URL
  var hash = window.location.hash;
  
  // Verifica si hay un hash y si corresponde a una pestaña
  if (hash && hash.startsWith("#Par")) {
    // Activa la pestaña correspondiente
    $('a[href="' + hash + '"]').tab('show');
  }
});