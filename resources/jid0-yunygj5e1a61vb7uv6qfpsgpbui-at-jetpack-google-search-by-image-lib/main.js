// This is an active module of the Google by Image Add-on
exports.main = function() {};
var contextMenu = require("context-menu");
var tabs = require("tabs");
var searchMenu = contextMenu.Item({
      label: "Google by Image",
  context: contextMenu.SelectorContext("img"),
  data: "http://images.google.com/searchbyimage?image_url=",
  contentScript: '  self.on("click", function (node, data) {' +
                 '  var searchURL = data + node.src;' +
                 '  self.postMessage(searchURL)' +
                 '});',
  onMessage: function (imgSrc) {
     tabs.open(imgSrc);
  }
});