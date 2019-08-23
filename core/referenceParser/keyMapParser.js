//Toma un string y devuelve un objeto con un indice apuntando a un bloque de la cadena de request, y un path a una clave interna
function keyMapParser(key) {
  const arr = key.split("_.");
  return { _instance: parseInt(arr[1]), _path: arr[2] };
}
