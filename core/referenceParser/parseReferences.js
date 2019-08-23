function parseReferences(request, arrayOfPreviousResponses) {
  request = objMapParser(request);
  for (var key in request) {
    if (
      typeof request[key] === "object" &&
      key.substr(0, commandPrefix.length) != commandPrefix
    ) {
      ///__instance indica la response en la cadena a la que se hace referencia
      if (request[key].hasOwnProperty(commandPrefix + "instance")) {
        request[key] = navigateObject(
          arrayOfPreviousResponses[request[key][commandPrefix + "instance"]],
          request[key][commandPrefix + "path"]
        );
      } else {
        request[key] = parseReferences(request[key], arrayOfPreviousResponses);
      }
    }
  }
  return request;
}
