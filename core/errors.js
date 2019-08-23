var errors = {
  noService: function(service) {
    return { error: service + " is not a valid service" };
  },
  unexistentReference: function(path){
    return { error: path + " is not a valid reference" };
  }
};
