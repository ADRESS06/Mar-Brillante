// configuraciones de las secciones
const btnOfertas = document.getElementById("btn-ofertas");
const btnInicio = document.getElementById("btn-inicio");
const btnTienda = document.getElementById("btn-tienda");

const seccionOfertas = document.querySelector(".ofertas");
const seccionInicio = document.querySelector(".inicio");
const seccionTienda = document.querySelector(".tienda");

btnOfertas.addEventListener("click", () => {
    btnOfertas.style.borderBottom = "2px solid gray";
    btnTienda.style.borderBottom = "none";
    btnInicio.style.borderBottom = "none";
    seccionOfertas.style.display = "block";
    seccionInicio.style.display = "none";
    seccionTienda.style.display = "none";
});

btnInicio.addEventListener("click", () => {
    btnInicio.style.borderBottom = "2px solid gray";
    btnOfertas.style.borderBottom = "none";
    btnTienda.style.borderBottom = "none";
    seccionOfertas.style.display = "none";
    seccionInicio.style.display = "flex";
    seccionTienda.style.display = "none";
});

btnTienda.addEventListener("click", () => {
    btnTienda.style.borderBottom = "2px solid gray";
    btnOfertas.style.borderBottom = "none";
    btnInicio.style.borderBottom = "none";
    seccionOfertas.style.display = "none";
    seccionInicio.style.display = "none";
    seccionTienda.style.display = "block";
});
// Funcion de compra
function Comprar(btn) {
    var infoItem = btn.parentNode;
    var nombreProducto = infoItem.querySelector('h3').textContent;
    var precioProducto = infoItem.querySelector('p').textContent;

    // Obtener la ventana modal
    var modal = document.getElementById("myModal");

    // Mostrar la ventana modal
    modal.style.display = "block";

    // Esperar unos segundos antes de enviar a whatsapp
    setTimeout(function () {
        // Ocultar la ventana modal
        modal.style.display = "none";

        mensaje = 'Hola quisiera encargar el producto ' + nombreProducto + ' que tiene un costo de ' + precioProducto + ' por favor.';

        enlaceDeCompra = 'https://wa.me/+573242657928?text=' + mensaje;

        // Redirigir a un enlace
        window.location.href = enlaceDeCompra;},4000);
}

