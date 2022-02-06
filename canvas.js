var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");


function nuevoJuego() {
    pincel.fillStyle = "LightGrey";
    pincel.fillRect(0, 0, 800, 500);
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.moveTo(50, 450);
    pincel.lineTo(100, 400);
    pincel.lineTo(150, 450);
    pincel.fill();
	pincel.fillRect(95,45,10,400);
	pincel.fillRect(95,45,150,10);
	pincel.fillRect(245,45,10,50);
	pincel.fillRect(225,95,50,10);

    incorrectas = "";
    errores = 0;
    aciertos = 0;
    letrasPresionadas = "";

	document.getElementById("ahorcado").scrollIntoView();
    document.addEventListener("keypress", teclaPresionada);
    escogerPalabraSecreta();
    crearGuiones(palabraSecreta);
}

function crearGuiones(palabraSecreta) {
    let cantidadLetras = palabraSecreta.length;
    pincel.fillStyle = "Black";
    for (let i = 0; i < cantidadLetras; i++) {
        pincel.fillRect(300 + (50 * i), 400, 25, 5);
    }
}

function letraCorrecta(letra) {
    pincel.font = "21px Arial";
    pincel.fillStyle = "Black";
	let posicion = palabraSecreta.indexOf(letra);
	let cuenta = 0;
	while ( posicion != -1 ) {
		pincel.fillText(letra, 305 + (50 * posicion), 380);
		cuenta += posicion;
		posicion = palabraSecreta.indexOf(letra,cuenta+1);
		aciertos++;
	}
	verSiGane();
}

function letraIncorrecta(letra) {
    pincel.font = "21px Arial";
    pincel.fillStyle = "Black";
	if (!incorrectas.includes(letra)){
		incorrectas += letra;
		pincel.fillText(incorrectas, 400, 300);
		dibujarAhorcado();
	}
}

function dibujarAhorcado() {
    pincel.fillStyle = "black";
	pincel.strokeStyle  = "black";
    switch (errores) {
        case 0: // Cabeza
            pincel.beginPath();
            pincel.arc(250, 130, 25, 0, Math.PI * 2);
            pincel.fill();
            break;
        case 1: // Torso
            pincel.fillRect(247, 145, 5, 100);
            break;
        case 2: // Pierna derecha
            pincel.beginPath();
            pincel.lineWidth=5;
            pincel.moveTo(250,245);
            pincel.lineTo(280,300);
            pincel.stroke();
            break;
        case 3: // Pierna izquierda
            pincel.beginPath();
            pincel.lineWidth=5;
            pincel.moveTo(250,245);
            pincel.lineTo(220,300);
            pincel.stroke();
            break;
        case 4: // Brazo derecho
            pincel.beginPath();
            pincel.lineWidth=5;
            pincel.moveTo(250,190);
            pincel.lineTo(280,230);
            pincel.stroke();
            break;
        case 5: // Brazo izquierdo
            pincel.beginPath();
            pincel.lineWidth=5;
            pincel.moveTo(250,190);
            pincel.lineTo(220,230);
            pincel.stroke();
            break;
		case 6: // Ahorcado 
			pincel.beginPath();
			pincel.strokeStyle  = "red";
            pincel.lineWidth=3;
            pincel.moveTo(220,180);
            pincel.lineTo(280,160);
            pincel.stroke();
			pincel.font = "10px Arial";
			pincel.fillStyle = "red";
			pincel.fillText("X   X", 240, 130);
            finJuego();
    }
	errores++;
}

function finJuego(){
    let opcion = confirm("GAME OVER! Desea jugar otra vez?");
	if (opcion){
		nuevoJuego();
	} else {
		location.reload();
	}
}

function verSiGane(){
    if(aciertos== palabraSecreta.length){
		let opcion = confirm("Has GANADO! Desea jugar otra vez?");
		if (opcion){
			nuevoJuego();
		} else {
			location.reload();
		}
	}
}