chrome.action.onClicked.addListener(openTab);

chrome.runtime.onInstalled.addListener(openTab);

function openTab() {
  var newURL = "https://mg-student.netlify.app/applications";
  chrome.tabs.create({ url: newURL });
}