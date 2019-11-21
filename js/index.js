/*jshint esversion: 8*/

(function(){
  "use strict";

  var menu = document.getElementById("menu");
  var title = document.getElementById("title");
  var isEnabled = false;
  
  menu.onclick = function() {
    if(isEnabled === false) {
      isEnabled = true;
      title.style.color = "red";
    }
    else {
      isEnabled = false;
      title.style.color = "";
    }
  };
})();
