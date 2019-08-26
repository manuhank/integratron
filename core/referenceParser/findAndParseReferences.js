//receives an request object, and an arrayOfPreviousResponses array
function findAndParseReferences(request, arrayOfPreviousResponses) {
  //busca referencias dep
  //request = objMapParser(request);
  var reg = new RegExp("/${(.+)}/");
  for (var key in request) {
    if (typeof request[key] === "string") {
      request[key] = parseReferencesInString(request[key], arrayOfPreviousResponses)
    } else if (
      //toda referencia es un objeto
      typeof request[key] === "object" &&
      //no debe ser un commando (los comandos de referencia son propiedad internas)
      key !== syntax.requests &&
      key !== syntax.services
    ) {
      request[key] = findAndParseReferences(request[key], arrayOfPreviousResponses);
    }
  }
  return request;
}
