//services must be an array of strings
//request must be an array of objects
//previousResponses must be an array
//optionally, it posible to pass an array of previous responses
function runThreadOfServices(
  services,
  requests,
  previousResponses,
  targetedArray
) {
  for (var i in services) {
    try {
      targetedArray.push(
        runService(services[i], requests[i], previousResponses)
      );
    } catch (error) {
      Logger.log(error);
      throw error;
    }
  }
}
