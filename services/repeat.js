function repeat(request) {
  var responses = [];
  var origin = request[commandPrefix + "array"];
  origin.forEach(function(object) {
    var initResponses = []
    initResponses[syntax.array] = object
    var chain = chainServicesExecution(request[syntax.services], request[syntax.requests], initResponses);
    responses.push(chain[chain.length - 1]);
  });

  return responses;
}
