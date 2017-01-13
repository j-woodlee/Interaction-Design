/*
   This is a very simple example of a web front end for a publicly available web service.
   Due to its pedagogical nature, comments are more elaborate than they typically need to
   be, or may even be present when no developer explanation would usually be necessary.

   Further, this example uses JavaScript ES6 syntax.
*/
"use strict";

// Yes, this is a "global." But it is a single entry point for all of the code in the module,
// and in its role as the overall controller code of the page, this is one of the acceptable
// uses for a [single!] top-level name.
//
// Module managers address even this issue, for web apps of sufficient complexity.
window.GetChar = (() => {
    return {
        init: () => {
            var charID = $("#char-id");
            var viewCharButton = $("#viewchar-button");
            var numChars = 0;
            viewCharButton.click(() => {
                numChars += 1;
                $.getJSON(
                  "http://lmu-diabolical.appspot.com/characters/" + charID.val(),
                  function (character) {
                      var info = [];
                      info.push($("<div></div>").text("Character " + numChars));
                      info.push($("<div></div>").text("ID: " + character.id));
                      info.push($("<div></div>").text("Name: " + character.name));
                      info.push($("<div></div>").text("Gender: " + character.gender));
                      info.push($("<div></div>").text("Level: " + character.level));
                      info.push($("<div></div>").text("Money: " + character.money));
                      info.push($("<div></div>").text("Class: " + character.classType));
                      info.push($("<br>").text(""));
                      $("#char-info").append(info);
                      // Do something with the character.
                      // console.log(character);
                  }
              );
            });
        }
    };
})();
