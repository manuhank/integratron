//receives an request object, and an arrayOfPreviousResponses array
function parseReferences(request, arrayOfPreviousResponses) {
  //busca referencias dep
  //request = objMapParser(request);
  for (var key in request) {
    if (
      //toda referencia es un objeto
      typeof request[key] === "object" &&
      //no debe ser un commando (los comandos de referencia son propiedad internas)
      key !== syntax.requests &&
      key !== syntax.services
    ) {
      ///__instance indica la response en la cadena a la que se hace referencia
      if (request[key].hasOwnProperty(syntax.instance)) {
        request[key] = navigateObject(
          request[key][syntax.path],
          arrayOfPreviousResponses[request[key][syntax.instance]]
        );
      } else {
        request[key] = parseReferences(request[key], arrayOfPreviousResponses);
      }
    }
  }
  return request;
}