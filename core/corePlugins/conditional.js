function conditional(request){
    var condition = request.condition
    var veredicts = request.veredicts
    var variables = {}
    request.hasOwnProperty('variables')? variables = request.variables: ''
    if(eval(condition)){
        return veredicts[1]
    } else {
        return veredicts[0]
    }
    
}