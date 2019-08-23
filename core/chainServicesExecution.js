//services must be an array of strings
//request must be an array of objects
function chainServicesExecution(services, requests) {
  var responses = [];
  for (i = 0; i < data.services.length; i++) {
    var service = services[i];
    var request = requests[i];
    if (loadedServices.indexOf(service) < 0) {
      return crearJSON(noService(service));
    } else {
      responses.push(this[service](composeRequest(request, responses)));
    }
  }
  return responses;
}
