function objMapParser(obj) {
  for(const key in obj) {
    if (typeof obj[key] && key.substr(0, 2) === "_.") {
      obj[key] = keyMapParser(obj[key]);
    } else if (typeof obj[key] === "object") {
      obj[key] = objMapParser(obj[key]);
    }
  };
  return obj
}
