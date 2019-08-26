function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var responses = [];
  var services = data[syntax.services];
  var requests = data[syntax.requests];
  runThreadOfServices(services, requests, responses, responses)
  
  return exportJSON(responses[responses.length - 1]);
}
