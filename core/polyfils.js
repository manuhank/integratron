//availeble only inside functions (thanks to apps script implementation)
Object.assign = function (target, source){
    if (!target || !source)
      throw new Error("Invalid arguments.");
    for (var property in source)
      if (source.hasOwnProperty(property))
        target[property] = source[property];
    return target;
  };