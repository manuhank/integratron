function keyMapParser(key) {
  const arr = key.split("_.");
  return { _instance: parseInt(arr[1]), _path: arr[2] };
}
