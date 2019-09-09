function conditional(request, arrayOfPreviousResponses) {
  for (var i in request) {
    var condition;
    if (i === "else") {
      condition = true;
    } else {
      condition = parseReferencesInString(i, arrayOfPreviousResponses);
    }
    try {
      if (condition === true || eval(condition)) {
        if (
          typeof request[i] === "object" &&
          request[i].hasOwnProperty(syntax.services) &&
          request[i].hasOwnProperty(syntax.requests)
        ) {
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
        } else return request[i];
      }
    } catch (error) {
      return { error: error, condition: condition };
    }
  }
  return false;
}
