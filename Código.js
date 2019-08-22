function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var input;
  const services = ["airtable", "tarjetasMercadoPago"];
  services.forEach(function(service) {
    if (data.hasOwnProperty(service)) {
      input = this[service](data[service]);
    }
  });
  return crearJSON(input)
}
