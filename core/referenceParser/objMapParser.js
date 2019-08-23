function objMapParser(obj) {
  for (var key in obj) {
    if (
      typeof obj[key] === "string" &&
      obj[key].substr(0, referencePrefix.length) === referencePrefix
    ) {
      obj[key] = keyMapParser(obj[key]);
    } else if (
      typeof obj[key] === "object" &&
      key.substr(0, commandPrefix.length) != commandPrefix
    ) {
      obj[key] = objMapParser(obj[key]);
    }
  }
  return obj;
}
