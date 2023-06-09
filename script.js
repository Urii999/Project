function recortarEnlace() {
  var input = document.getElementById("urlInput");
  var url = input.value;

  // Realiza la solicitud HTTP a un servicio de recorte de enlaces
  // Aquí se utiliza el servicio "Bit.ly", pero puedes usar otros servicios también
  fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 7ff92ff133c126ff466be7f3e0ab963516"
    },
    body: JSON.stringify({
      long_url: url
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data && data.link) {
        var shortenedUrl = data.link;
        var resultElement = document.getElementById("shortenedUrl");
        resultElement.textContent = "Enlace recortado: " + shortenedUrl;

        // Borrar la información en el campo de entrada
        input.value = "";
      } else {
        console.log("No se pudo recortar el enlace.");
      }
    })
    .catch(error => {
      console.log(error);
    });
}
