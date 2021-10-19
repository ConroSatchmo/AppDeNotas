//Requerir modulo fs

const fs = require("fs");

//Consumir archivo tareas.json y convertirlo a string

const lecturaArchivoJSON = fs.readFileSync("./tareasJSON.json", "utf-8"); //Con esta linea podemos leer el archivo Json
const objetoJSON = JSON.parse(lecturaArchivoJSON); //Con esta linea volvemos a hacer objeto el Json
const tareasJSON = require('./leertareas')
const argumento = process.argv[2]; //Pedir explicacion del proceso argv. Se puede usar un console.log() del process.argv y ver como funciona

const {
  listarTareas,
  escribirJSON,
  guardarTarea,
  leerPorEstado
} = require("./funcionesDeTareas.js");

switch (argumento) {
  case "listar":
    listarTareas();
    break;
  case undefined:
    console.log("Atencion - Tienes que pasar una accion");
    break;
  case "crear":
    let tituloDeTarea = process.argv[3]
    guardarTarea(tareasJSON , {titulo : tituloDeTarea,
    estado : 'pendiente'})
    break;
    case "filtrar":
      let estadoDeseado = process.argv[3]
      let resultado = leerPorEstado(estadoDeseado)
      resultado.forEach(element => {
        console.log(element)
      });
    break; 
  default:
    console.log("No entiendo que quieres hacer.");
    break;
}
