var toggle = document.getElementById('switch');
var logoNav = document.querySelector('.logo-navbar');
var logoFoot = document.querySelector('.logo-footer');
var ship = document.querySelector('.ship');
var twitter = document.querySelector('.twitter');
var medium = document.querySelector('.medium');
var discord = document.querySelector('.discord');

toggle.onclick = () => {
	document.body.classList.toggle('light-mode');
	if (document.body.classList.contains('light-mode')) {
		logoNav.src = 'img/logo-2.png';
    logoFoot.src = 'img/logo-footer-2.png';
    ship.src = 'img/ship-dark.png';
    twitter.src = 'img/twitter-dark.png';
    medium.src = 'img/medium-dark.png';
    discord.src = 'img/discord-dark.png';
	} else {
		logoNav.src = 'img/logo.png';
    logoFoot.src = 'img/logo-footer.png';
    ship.src = 'img/ship-light.png';
    twitter.src = 'img/twitter-light.png';
    medium.src = 'img/medium-light.png';
    discord.src = 'img/discord-light.png';
	}
}


(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();