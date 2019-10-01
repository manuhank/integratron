function doGet(e) {
  var data = JSON.parse(e.parameter.post);
  var responses = []
  var services = data[syntax.services];
  var requests = data[syntax.requests];
  var debugIsEnabled = data.hasOwnProperty(syntax.debugIsEnabled) && data[syntax.debugIsEnabled];
  try{
      runThreadOfServices(services, requests, responses, responses)
  } catch (e){
    debugIsEnabled = true;
  }
  if(debugIsEnabled){
    Logger.log(responses)
    emailLogs();
  }
  return exportJSON(responses[responses.length - 1]);
}
