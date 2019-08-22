function galeriaMessenger(arrElementos) {
  if (Array.isArray(arrElementos[0])) {
    return arrElementos.map(function(arr){
      return galeriaMessenger(arr)
    });;
  } 
  var galeria = {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: arrElementos
      }
    }
  };

  return galeria
}
