function navigateObject(obj, path) {
  //takes an object and a path (string) and returns the value of the key at that path
  for (var i = 0, keys = path.split("."), len = keys.length; i < len; i++) {
    obj = obj[keys[i]];
  }
  return obj;
}
