function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var responses = runFromObject(data);
  return exportJSON(responses[responses.length - 1]);
}
