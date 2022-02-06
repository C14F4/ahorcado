var botonIniciarPartida = document.querySelector("#iniciar-juego");
var botonNuevaPartida = document.querySelector("#boton-nueva-partida");
var botonAgregarPalabra = document.querySelector("#nueva-palabra");
var inputPalabraNueva = document.querySelector("#input-nueva-palabra");

var palabras = ["ALURA", "ORACLE", "HTML", "JAVASCRIPT", "FUNCION", "VARIABLE", "CHALLENGE"];
var palabraSecreta;
var incorrectas = "";
var errores = 0;
var aciertos=0;
var letrasPresionadas="";

function agregarPalabra() {
	let palabraNueva = inputPalabraNueva.value;
    if (palabraNueva.length > 0) {        
		let palabraNuevaMayuscula= palabraNueva.toUpperCase();
        palabras.push(palabraNuevaMayuscula);
		inputPalabraNueva.value = "";
    }
}

function escogerPalabraSecreta() {
    let alteatorio = Math.floor(Math.random() * palabras.length);
    palabraSecreta = palabras[alteatorio];
}

function teclaPresionada(evento) {
    let letra = evento.key.toUpperCase(); 
    //console.log("Presionada: " + letra);
	if (!letrasPresionadas.includes(letra)){
		if (palabraSecreta.includes(letra)){
			letraCorrecta(letra);
		}else{
			letraIncorrecta(letra);
		}
		letrasPresionadas += letra;
	}
};

botonAgregarPalabra.onclick = agregarPalabra;
botonIniciarPartida.onclick = nuevoJuego;