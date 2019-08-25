function repeat(request) {
  var responses = [];
  var origin = request[syntax.array];
  for (var key in origin) {
    var initResponses = []
    initResponses[syntax.array] = origin[key]
    var chain = chainServicesExecution(request[syntax.services], request[syntax.requests], initResponses);
    responses.push(chain[chain.length - 1]);
  };

  return responses;
}
