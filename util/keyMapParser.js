function keyMapParser(key) {
  if (key.substr(0,2) === "_.") {
      const arr = key.split('_.')
    return { _instance: parseInt(arr[1]), _key: arr[2] };
  }
  return key;
}
