function gmail(request){
    var result
    if(Object.keys(request).length == 1){
        result = GmailApp[method](parameters)
    }
    for (var i of request) {
        
    } 
    if(result == GmailApp) return true
    return result
}