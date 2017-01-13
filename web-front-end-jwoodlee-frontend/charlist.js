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
window.ListChars = (() => {
    return {
        init: () => {
            var charListButton = $("#view-char-list-button");
            charListButton.click(() => {
                var numChar = 0;
                $.getJSON(
                      "http://lmu-diabolical.appspot.com/characters",
                      function (characters) {
                          // Do something with the character list.
                          characters.forEach(function (character) {
                              numChar += 1;
                              // console.log(character);
                              var info = [];
                              info.push($("<br>").text(""));
                              info.push($("<div></div>").text("Character " + numChar));
                              info.push($("<div></div>").text("ID: " + character.id));
                              info.push($("<div></div>").text("Name: " + character.name));
                              info.push($("<div></div>").text("Gender: " + character.gender));
                              info.push($("<div></div>").text("Level: " + character.level));
                              info.push($("<div></div>").text("Money: " + character.money));
                              info.push($("<div></div>").text("Class: " + character.classType));
                              $("#char-info").append(info);
                          });
                      }
                );
            });
        }
    };
})();
