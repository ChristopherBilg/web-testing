/*jshint esversion: 8*/

(function(){
  "use strict";

  var menu = document.getElementById("menu");
  var content = document.getElementById("content");
  var isEnabled = false;
  
  menu.onclick = function() {
    if(isEnabled === false) {
      isEnabled = true;
      content.style.backgroundColor = "red";
    }
    else {
      isEnabled = false;
      content.style.backgroundColor = "";
    }
  };
})();
