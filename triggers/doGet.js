function doGet(e) {
  var data = JSON.parse(e.parameter.post);
  var responses = runFromObject(data);
  return exportJSON(responses[responses.length - 1]);
}
