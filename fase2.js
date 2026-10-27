import Casa from "./clases/Casa.js";
import Guerrero from "./clases/personajesEspeciales/Guerrero.js";
import Consejero from "./clases/personajesEspeciales/Consejero.js";
import Rey from "./clases/personajesEspeciales/Rey.js";
import Arma from "./clases/Arma.js";
import Reino from "./clases/Reino.js";


// Creamos las casas.
const stark = new Casa("Stark", "Se acerca el invierno");
const lannister = new Casa("Lannister", "Oye mi rugido");

// Creamos el reino.
const poniente = new Reino("Poniente");

// Añadimos las casas al reino.
poniente.agregarCasa(stark);
poniente.agregarCasa(lannister);



// Creamos las armas.
const garra = new Arma("Garra", 25, "espada");


// Creamos los personajes.
const jon = new Guerrero("Jon Snow", 25, stark, garra);
const tyrion = new Consejero("Tyrion Lannister", 25, lannister, "su especialidad");
const robert = new Rey("Robert Baratheon", 25, lannister, 15);

//añadimos los personajes a las casas
stark.personajeCasa(jon);
lannister.personajeCasa(tyrion);
lannister.personajeCasa(robert);

//acciones de jon
jon.presentarse();
jon.luchar();
jon.entrenar();

//acciones de tyrion
tyrion.presentarse();
tyrion.luchar();
tyrion.aconsejar(robert);

//acciones de robert
poniente.proclamarRey(robert);
robert.presentarse();
robert.gobernar();
robert.luchar();


