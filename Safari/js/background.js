browser.browserAction.onClicked.addListener(openTab);

browser.runtime.onInstalled.addListener(openTab);

function openTab() {
  var newURL = "https://mg-student.netlify.app/applications";
  browser.tabs.create({ url: newURL });
}