//services must be an array of strings
//request must be an array of objects
//responsesThread must be an array
//optionally, it posible to pass an array of previous responses
function runService(service, request, responsesThread) {
  if (itsAPlugin(service)) {
    return this[service](
      findAndParseReferences(request, responsesThread),
      responsesThread
    );
  } else {
    return errors.noService(service);
  }
}
