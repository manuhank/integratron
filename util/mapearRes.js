function mapearRespuesta(mapa, respuesta){
    var salida = {};
    for (var clave in mapa) {
        if(respuesta.hasOwnProperty(mapa[clave])){
            salida[clave] = respuesta[mapa[clave]];
        }
    }
    return salida;
}