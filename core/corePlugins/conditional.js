function conditional(request){
    var condition = request.condition
    var results = request.results
    var variables = {}
    request.hasOwnProperty('variables')? variables = request.variables: ''
    if(eval(condition)){
        return results[1]
    } else {
        return results[0]
    }
    
}