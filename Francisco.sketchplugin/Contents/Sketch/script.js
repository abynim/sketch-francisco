var go = function(c) {
  try { Francisco.go(c); }
  catch(e) {
      if(Mocha.sharedRuntime().loadFrameworkWithName_inDirectory('Francisco', NSBundle.bundleWithURL(c.plugin.url()).resourceURL().path())) {
          try { Francisco.go(c); }
          catch(e) {
              log("Could not load Francisco framework. Check requirements at https://github.com/abynim/sketch-francisco#requirements")
          }
      }
  }
}
var getHelp = function(c) {
    const url = "https://github.com/abynim/sketch-francisco#how-to-use"
    NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString(url));
}
