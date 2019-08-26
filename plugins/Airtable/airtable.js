function airtable(request, arrayOfPreviusRequests) {
  var options = {
    headers: {
      Authorization: "Bearer " + request.token
    },
    muteHttpExceptions: true
  };
  var url =
    "https://api.airtable.com/v0/" + request.baseid + "/" + request.table;

  if (request.hasOwnProperty("get")) {
    if (request.get.hasOwnProperty("id")) {
      url = url + "/" + encodeURI(request.get.id);
    } else if (Object.keys(request.get).length > 0) {
      url = url + "?" + composeQueryURL(request.get);
    }
  } else if (request.hasOwnProperty("post")) {
    options.method = "post";
    options.headers["Content-Type"] = "application/json";
    options.payload = JSON.stringify({ fields: request.post });
  } else if (request.hasOwnProperty("delete")) {
    options.method = "delete";
    //GAS entiende delete como operador asi q esto:
    url = url + "/" + encodeURI(request["delete"]);
  } else if (request.hasOwnProperty("patch")) {
    options.method = "patch";
    options.headers["Content-Type"] = "application/json";
    url = url + "/" + encodeURI(request.patch["__id"]);
    delete request.patch["__id"];
    options.payload = JSON.stringify({ fields: request.patch });
  }
  for (var i in request) {
    var id = parseReferencesInString(i, arrayOfPreviusRequests);
    if (id.substr(0, 3) === "rec") {
      options.method = "patch";
      options.headers["Content-Type"] = "application/json";
      url = url + "/" + encodeURI(id);
      options.payload = JSON.stringify({ fields: request[i] });
      break
    }
  }
  var response = JSON.parse(UrlFetchApp.fetch(url, options));
  if (response.hasOwnProperty("error")) {
    response.requestPeticionada = request;
    response.requestEmitida = UrlFetchApp.getRequest(url, options);
  }
  return response;
}
