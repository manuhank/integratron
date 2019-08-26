//services must be an array of strings
//request must be an array of objects
//responsesThread must be an array
//optionally, it posible to pass an array of previous responses
function runThreadOfServices(services, requests, responsesThread, targetedArray) {
  for (var i in services) {
    targetedArray.push(
      runService(
        services[i],
        requests[i],
        responsesThread
      )
    );
  }
}
