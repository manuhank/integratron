//toma un objeto o array y devuelve el valor de la ruta (string)
//si se añade [i] al final de una propiedad que es un array, itinera el resto del path
function navigateObject(path, obj) {
  if (path.length) {
    var arraysToItinerate = path.split(/\[i\](.+)/);
    obj = eval("obj." + arraysToItinerate[0]);
    if (arraysToItinerate.length > 1) {
      for (var i in obj) {
        obj[i] = navigateObject(arraysToItinerate[1].substr(1), obj[i]);
      }
    }
  }
  return obj;
}
