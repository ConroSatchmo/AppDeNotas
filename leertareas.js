const fs = require('fs');

let tareas = fs.readFileSync('./tareasJSON.json' , 'utf-8');

module.exports = tareas