function mercadoPagoSCO(request) {
  var options = {
    headers: {
      "user-agent": "MercadoPago Node.js SDK v1.1.0 (node v11.9.0-x64-win32)",
      //"accept": "application/json",
      "Content-Type": "application/json",
      //"host": "api.mercadopago.com"
    },
    method: "post",
    muteHttpExceptions: true
  };
  var url =
    "https://api.mercadopago.com/checkout/preferences?access_token=" +
    request.access_token;

  var body = Object.assign({},request);
  delete body.access_token;
  options.payload = JSON.stringify(body);
 // options.headers["content-length"] = options.payload.length;
  var response = JSON.parse(UrlFetchApp.fetch(url, options));
  if (response.hasOwnProperty("error")) {
    response.error = response;
    response.requestPeticionada = request;
    response.requestEmitida = UrlFetchApp.getRequest(url, options);
  }
  return response;
}
