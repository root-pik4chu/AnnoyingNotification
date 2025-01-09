chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
   if (changeInfo.url) {
     checkForDistraction(changeInfo.url);
   }
 });
 
 chrome.tabs.onActivated.addListener(async (activeInfo) => {
   const tab = await chrome.tabs.get(activeInfo.tabId);
   if (tab.url) {
     checkForDistraction(tab.url);
   }
 });
 
 function checkForDistraction(url) {
   if (url.includes("youtube.com/shorts") || url.includes("instagram.com")) {
     chrome.windows.create({
       url: chrome.runtime.getURL("popup.html"), // Custom popup HTML
       type: "popup",
       width: 600,  // Custom width for popup
       height: 300, // Custom height for popup
     });
   }
 }
 