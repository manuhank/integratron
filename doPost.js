function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var responses = chainServicesExecution(data[syntax.services], data[syntax.requests])
  return exportJSON(responses[responses.length - 1]);
}
