function runFromObject(object) {
  var responses = [];
  var services = object[syntax.services];
  var requests = object[syntax.requests];
  var debugIsEnabled =
    object.hasOwnProperty(syntax.debugIsEnabled) &&
    object[syntax.debugIsEnabled];
  try {
    runThreadOfServices(services, requests, responses, responses);
  } catch (e) {
    debugIsEnabled = true;
  }
  if (debugIsEnabled) {
    Logger.log(responses);
    emailLogs();
  }
  return responses;
}
