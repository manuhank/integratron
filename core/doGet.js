function doGet(e) {
  var data = JSON.parse(e.parameter.post);
  var responses = chainServicesExecution(data[syntax.services], data[syntax.requests])
  return exportJSON(responses[responses.length - 1]);
}
