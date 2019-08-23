function debug() {
    var response = {}
    if(Array.isArray(variables)){
        variables.forEach(function(variable){
            response[variable] = that[variable]
        })
    }
    return response
}