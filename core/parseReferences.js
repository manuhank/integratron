function parseReferences(request, arrayOfPreviousResponses) {
  request = objMapParser(request);
  for (var key in request) {
    if (typeof request[key] === "object") {
      if (request[key].hasOwnProperty("_instance")) {
        request[key] = navigateObject(
          arrayOfPreviousResponses[request[key]._instance],
          request[key]._path
        );
      } else {
        request[key] = parseReferences(request[key], arrayOfPreviousResponses);
      }
    }
  }
  return request;
}
