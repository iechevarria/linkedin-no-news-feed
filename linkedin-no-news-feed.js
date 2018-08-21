let timer = setInterval(hideNewsFeed, 300)

function hideNewsFeed() {
  console.log('Searching for news feed')
  if (document.getElementsByClassName('core-rail').length) {
    document.getElementsByClassName('core-rail')[0].innerHTML = ''
    console.log('News feed deleted')
    clearInterval(timer)
    return
  }
}
