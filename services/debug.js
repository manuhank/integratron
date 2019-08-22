function debug(variables) {
    var response = {}
    if(Array.isArray(variables)){
        variables.forEach(function(variable){
            response[variable] = [variable]
        })
    }
    return response
}