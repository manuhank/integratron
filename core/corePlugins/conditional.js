function conditional(request, arrayOfPreviousResponses) {
  for (var i in request) {
    var condition = parseReferencesInString(i, arrayOfPreviousResponses);
    try {
      if (eval(condition)) {
        var services = request[i][syntax.services];
        var requests = request[i][syntax.requests];
        var responses = arrayOfPreviousResponses.slice();
        responses.push([]);
        var thisThread = responses.length - 1;
        runThreadOfServices(
          services,
          requests,
          arrayOfPreviousResponses,
          responses[thisThread]
        );
        if (responses[thisThread].length) {
          var lastResponse = responses[thisThread].length - 1;
          return responses[thisThread][lastResponse];
        }
      }
    } catch (error) {
      return { error: error, condition: condition };
    }
  }
  return false;
}
