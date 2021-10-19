const fs = require("fs");
const tareas = require("./leertareas");
const tareasJSON = require("./leertareas");

const lecturaArchivoJSON = fs.readFileSync("./tareasJSON.json", "utf-8"); //Con esta linea podemos leer el archivo Json
const objetoJSON = JSON.parse(lecturaArchivoJSON); //Con esta linea volvemos a hacer objeto el Json

function listarTareas() {
  objetoJSON.forEach((element) => {
    console.log(element);
  });
}

function escribirJSON(array) {
  let nuevoElementoJSON = JSON.stringify(array);
  fs.writeFileSync("./tareasJSON.json", nuevoElementoJSON);
}

function guardarTarea(tareasJSON, nuevaTarea) {
  let tareaObjeto = JSON.parse(tareasJSON); // convierto el json a objeto
  tareaObjeto.push(nuevaTarea); // a ese objeto le pusheo una nueva tarea
  escribirJSON(tareaObjeto); // uso la funcion de escribir para guardar esa tarea, dentro del JSON
}

function leerPorEstado(estado){
  let tareaObjeto = JSON.parse(tareasJSON)
  let tareasFiltradas = tareaObjeto.filter((element) => element.estado == estado)
  return tareasFiltradas
}

//console.log(leerPorEstado('pendiente'))

module.exports = { listarTareas, escribirJSON, guardarTarea , leerPorEstado }; //El export lo vamos a hacer de un objeto
