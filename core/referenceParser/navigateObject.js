//toma un objeto o array y devuelve el valor de la ruta (string)
//si se añade [i] al final de una propiedad que es un array, itinera el resto del path
function navigateObject(path, obj) {
  if (path.length) {
    path = path.split(/\[i\](.+)/);
    var pathToItinerate = path[1];
    path = path[0];

    for (
      var i = 0, keys = path.split("."), len = keys.length;
      i < len;
      i++
    ) {
      obj = obj[keys[i]];
    }

    if (pathToItinerate) {
      for (var i in obj) {
        obj[i] = navigateObject(pathToItinerate.substr(1), obj[i]);
      }
    }
  }
  return obj;
}