function itsAPlugin(string) {
  var loadedPlugins = Object.assign(plugins, {
    mapJSON: {},
    repeat: {},
    conditional: {},
    debug: {}
  });
  return Object.keys(loadedPlugins).indexOf(string) != -1
}