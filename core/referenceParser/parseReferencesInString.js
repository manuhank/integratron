function parseReferencesInString(string, arrayOfPreviousResponses) {
  var reg = /\$\{(\d.*?)\}/gi;
  var matches = string.match(reg);
  if (matches) {
    var howManyMatches = matches.length;
    if (howManyMatches === 1 && matches[0].length === string.length) {
      string = navigateObject(
        matches[0].slice(2, matches[0].length - 1),
        arrayOfPreviousResponses
      );
    } else {
      for (var i in matches) {
        string = string.replace(
          matches[i],
          JSON.stringify(
            navigateObject(
              matches[i].slice(2, matches[i].length - 1),
              arrayOfPreviousResponses
            )
          )
        );
      }
    }
  }
  return string
}