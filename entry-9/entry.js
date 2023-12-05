setTimeout(function(){
    document.getElementById("myVideo").play();
}, 1500);
function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}
var videoEl = document.getElementById("myVideo");
var videoWasStarted = false;

window.addEventListener('scroll', function(e) {
  if (isScrolledIntoView(videoEl) && !videoWasStarted) {
    videoWasStarted = true;
    videoEl.play();
  }
});