// post: https://stackoverflow.com/questions/34957319/how-to-listen-for-url-change-with-chrome-extension
// user: https://stackoverflow.com/users/6586407/ztrat4dkyle 
browser.tabs.onUpdated.addListener(
  function(tabId, changeInfo) {
    if (changeInfo.url && changeInfo.url == 'https://www.linkedin.com/feed/') {
      browser.tabs.sendMessage( tabId, {
        remove: true
      })
    }
  }
);
  