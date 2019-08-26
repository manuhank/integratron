function test(){
    Logger.log(conditional(findAndParseReferences({"condition":"variables.results.length", "variables":{"results": [{}]}, "run":{"__services": ["mapJSON"],"__requests":[{"id":{"__path":"0.results.0.id"}}]}},[{results:[{id:"hola"}]}]), [{results:[{id:"hola"}]}] ))
    }