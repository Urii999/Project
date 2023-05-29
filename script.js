document.getElementById('shortenButton').addEventListener('click', function() {
  var urlInput = document.getElementById('urlInput');
  var shortenedUrl = document.getElementById('shortenedUrl');

  // Verifica si se ingresó una URL válida
  if (isValidUrl(urlInput.value)) {
    // Realiza la operación de recorte de enlace aquí
    var shortened = shortenUrl(urlInput.value);
    shortenedUrl.textContent = 'Enlace recortado: ' + shortened;
  } else {
    shortenedUrl.textContent = 'Ingrese una URL válida.';
  }

  // Limpia el campo de entrada
  urlInput.value = '';
});

function isValidUrl(url) {
  // Verifica si la URL tiene un formato válido (aquí puedes agregar tu lógica de validación)
  // En este ejemplo, simplemente verifica que no esté vacía
  return url.trim() !== '';
}

function shortenUrl(url) {
  // Implementa la lógica para recortar el enlace aquí (por ejemplo, utilizando una API de recorte de enlaces)
  // En este ejemplo, simplemente devuelve la URL original
  return url;
}
