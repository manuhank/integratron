function composeQueryURL(obj){
    return Object.keys(obj).map(function(key){
        encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
    }).join('&')
}