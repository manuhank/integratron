function objMapParser(obj) {
  for(var key in obj) {
    if (typeof obj[key] === 'string' && obj[key].substr(0, 2) === "_.") {
      obj[key] = keyMapParser(obj[key]);
    } else if (typeof obj[key] === "object" && key != "_requests") {
      obj[key] = objMapParser(obj[key]);
    }
  };
  return obj
}