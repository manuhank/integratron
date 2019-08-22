function composeRequest(request, arrayOfPreviousResponses) {
  for (const key in request) {
    if (typeof request[key] === "object") {
      if (request[key].hasOwnProperty("_instance")) {
        request[key] = navigateObject(
          arrayOfPreviousResponses[_instance],
          request[key]._path
        );
      } else {
        composeRequest(request[key],arrayOfPreviousResponses);
      }
    }
  }
  return request
}
