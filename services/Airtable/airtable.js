function airtable(request) {
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
      url = url + "?" + componerQueryURL(request.get);
    }
  } else if (request.hasOwnProperty("post")) {
    options.method = "post";
    options.headers["Content-Type"] = "application/json";
    options.payload = JSON.stringify({ fields: request.post });
  } else if (request.hasOwnProperty("patch")) {
    options.method = "patch";
    options.headers["Content-Type"] = "application/json";
    url = url + "/" + encodeURI(request.patch["_.id"]);
    delete request.patch["_.id"];
    options.payload = JSON.stringify({ fields: request.patch });
  } else if (request.hasOwnProperty("delete")) {
    options.method = "delete";
    //GAS entiende delete como operador (?) asi q esto:
    url = url + "/" + encodeURI(request["delete"]);
  }

  var response = JSON.parse(UrlFetchApp.fetch(url, options));
  if (response.hasOwnProperty("error")) {
    response.requestPeticionada = request;
    response.requestEmitida = UrlFetchApp.getRequest(url, options);
  }
  return response;
}
