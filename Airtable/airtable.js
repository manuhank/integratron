function airtable(argumentos) {
  var options = {
    headers: {
      Authorization: "Bearer " + argumentos.token
    }
  };
  var url =
    "https://api.airtable.com/v0/" + argumentos.baseid + "/" + argumentos.table;

  if (argumentos.hasOwnProperty("get")) {
    if (argumentos.get.hasOwnProperty("id")) {
      url = url + "/" + encodeURI(argumentos.get.id);
    } else if (Object.keys(argumentos.get).length > 0) {
      url = url + "?" + componerQueryURL(argumentos.get);
    }
  } else if (argumentos.hasOwnProperty("post")) {
    options.method = "post";
    options.fields = argumentos.post;
  } else if (argumentos.hasOwnProperty("patch")) {
    options.method = "patch";
    options.fields = argumentos.patch;
  } else if (argumentos.hasOwnProperty("delete")) {
    options.method = "delete";
    //GAS entiende delete como operador (?) asi q esto:
    url = url + "/" + encodeURI(argumentos['delete'].id);
  }

  return JSON.parse(UrlFetchApp.fetch(url, options));
}
