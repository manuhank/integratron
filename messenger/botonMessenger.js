function botonMessenger(titulo, indexTipo, destino) {
  if (Array.isArray(titulo)) {
    return titulo.map(function(x) {
      //aca debiera ir un spread, pero no es soportado por GAS
      return textoMessenger(x[0], x[1], x[2]);
    });
  }

  var type = ["web_url", "json_plugin_url", "show_block"];
  var modelo = {
    type: type[indexTipo],
    title: titulo
  };
  if (indexTipo === 2) {
    if (Array.isArray(destino)) {
      modelo.block_names = destino;
    } else {
      modelo.block_names=[]
      modelo.block_names.push(destino)
    }
  } else {
    modelo.url = destino;
  }
  return modelo;
}
