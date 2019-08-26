function repeat(request, responsesThread) {
  var responses = [];
  var origin = request[syntax.array];
  for (var key in origin) {
    var itinerationResponses = []
    runThreadOfServices(request[syntax.services],request[syntax.requests], responsesThread, itinerationResponses);
    responses.push(itinerationResponses[itinerationResponses.length - 1]);
  };

  return responses;
}
