// background.js
chrome.tabs.onCreated.addListener((tab) => {
  if (1) {
      chrome.tabs.update({
        url: chrome.extension.getURL("index.html")
      });
      console.log("here lmao");
  }
  console.log("tab created", tab.url, tab);
})

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});


