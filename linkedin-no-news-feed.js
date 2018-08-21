function hideNewsFeed () {
  timer = setInterval(function deleteCoreRail() {
    if (document.getElementsByClassName('core-rail').length) {
      document.getElementsByClassName('core-rail')[0].innerHTML = ''
      clearInterval(timer)
    }
  }, 100)
}

browser.runtime.onMessage.addListener(
  function(request) {
    if (request.remove) {
      hideNewsFeed()
    }
  }
);
