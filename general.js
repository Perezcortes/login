// Cargar encabezado
/*fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("header").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar el encabezado:", error));
*/
// Cargar pie de página
fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar el pie de página:", error));
