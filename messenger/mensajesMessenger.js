//mensajes = array o objeto, atributo = objeto, bloques = array o string
function mensajesMessenger(mensajes, atributos, bloques) {
  var wrapper = {
    messages: [],
  };
  if (Array.isArray(mensajes)) {
    wrapper.messages = mensajes;
  } else {
    wrapper.messages.push(mensajes);
  }
  if(atributos){
    wrapper.set_attributes = atributos
  }
  if(bloques){
    if(Array.isArray(atributos)){
      wrapper.redirect_to_blocks = bloques;
    } else {
      wrapper.redirect_to_blocks = [];
      wrapper.redirect_to_blocks.push(bloques)
    }
  }
  return wrapper;
}
