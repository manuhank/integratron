function textoMessenger(mensaje){
    if (Array.isArray(mensaje)) {
        return mensaje.map(function(texto){
          return textoMessenger(texto)
        });
      } 
    return {text: mensaje}
}