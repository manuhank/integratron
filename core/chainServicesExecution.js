//services must be an array of strings
//request must be an array of objects
function chainServicesExecution(services, requests) {
  var responses = [];
  for (i = 0; i < data.services.length; i++) {
    var service = services[i];
    var request = requests[i];
    if (loadedServices.hasOwnProperty(service)) {
      responses.push(this[service](parseReferences(request, responses)));
    } else {
      return crearJSON(errors.noService(service));
    }
  }
  return responses;
}
