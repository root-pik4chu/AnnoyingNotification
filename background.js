
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
    chrome.notifications.create(
      {
        type: "basic",
        iconUrl: "icon.png", // Corrected property name
        title: "Band krrrrr yeeee .... ",
        message: "foknichyaa band krrr tee ... kiti vel zalaa te pay LELJi ",
        priority: 2,
      },
      () => {
        if (chrome.runtime.lastError) {
          console.error("Notification Error:", chrome.runtime.lastError.message);
        }
      }
    );
  }
}



