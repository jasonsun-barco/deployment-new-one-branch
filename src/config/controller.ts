export function Controller() {
  const b = "Hello World";
  console.log(b);
}

Controller.prototype.ComponentSelectionPageCallback = function () {
  var page = gui.pageWidgetByObjectName("ComponentSelectionPage");
  page.addVirtualComponentToUninstall("component");
};
