//Función para habilitar el Menú Responsive
function toggleMenu() {
    const menu = document.querySelector('.menu-2');
    menu.classList.toggle('open');
}

//Función de Cambiar el Tema de Claro a Oscuro
function CambiarHojaDeEstilos(){
    const CambioDeHoja = document.getElementById('thema');
    const boton = document.getElementById('thema-button');
    
    if (CambioDeHoja) {
        if(CambioDeHoja.href.includes("styles.css")){
            CambioDeHoja.href = "styles2.css";
            boton.innerHTML = "🌚";
        } else {
            CambioDeHoja.href = "styles.css";
            boton.innerHTML = "🌞";
        }
    } else {
        console.log('Error, hoja de estilos no encontrada');
    }
}

//Función para abrir ventana modal

let imagenes = document.querySelectorAll(".mi-imagen");
let modal = document.getElementById('modal');
let modalImg = document.getElementById('imagenModalGrande');
var captionText = document.getElementById("caption");
var cerrar = document.getElementById("cerrarModal");

imagenes.forEach(function(imagen) {
    imagen.onclick = function() {
        modal.style.display = "block"; 
        modalImg.src = this.src;      
        captionText.innerHTML = this.alt; 
    };
});

cerrar.onclick = function() {
    modal.style.display = "none"; 
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
}