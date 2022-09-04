
function addScript (url) {
  let script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', url)
  document.getElementsByTagName('head')[0].appendChild(script)
}
const baseurl = 'https://cdnjs.cloudflare.com/ajax/libs/sakana-widget/2.3.0/sakana.min.js'
addScript(baseurl)
function initSakanaWidget () {
  new SakanaWidget().mount('#sakana-widget')
}
module.exports = {
  initSakanaWidget
}
