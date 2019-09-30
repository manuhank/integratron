function itsAPlugin(string) {
  var loadedPlugins = Object.assign(plugins, {
    mapJSON: {},
    repeat: {},
    conditional: {}
  });
  return Object.keys(loadedPlugins).indexOf(string) != -1
}