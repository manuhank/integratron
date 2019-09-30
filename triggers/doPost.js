function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var responses = [];
  var services = data[syntax.services];
  var requests = data[syntax.requests];
  runThreadOfServices(services, requests, responses, responses)
  var debugIsEnabled = data.hasOwnProperty(syntax.debugIsEnabled) && data[syntax.debugIsEnabled];
  if(debugIsEnabled){
    Logger.log(responses)
    emailLogs();
  }
  return exportJSON(responses[responses.length - 1]);
}
