function mercadoPagoSCO(request){
    var options = {
        headers: {
            'Content-Type': application/json
        },
        muteHttpExceptions: true
      };
      var url = 'https://api.mercadopago.com/checkout/preferences?access_token=' + request.access_token;
      var body = Object.assign({}, request)
      delete body.access_token
      options.body = body
      var response = JSON.parse(UrlFetchApp.fetch(url, options))
      return response
}