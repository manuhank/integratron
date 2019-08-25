function elementoTemplateMessenger(titulo, urlImagen, subtitulo, botones){
  if (Array.isArray(titulo)) {
    return titulo.map(function(x){
      //aca debiera ir un spread, pero no es soportado por GAS
      return elementoTemplateMessenger(x[0],x[1],x[2],x[3])
    });
  }  
  var elemento = {
        title: titulo,
        image_url: urlImagen,
        subtitle: subtitulo
      };
  if(botones){
    if (Array.isArray(botones)){
      elemento.buttons = botones;
    }else {
      elemento.buttons = [];
      elemento.buttons.push(botones)
    }
  }
      return elemento
}