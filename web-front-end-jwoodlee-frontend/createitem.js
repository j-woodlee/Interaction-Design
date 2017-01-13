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
window.CreateItem = (() => {
    return {
        init: () => {
            var randItemButton = $("#randitem-button");
            var numItem = 0;
            randItemButton.click(() => {
                numItem += 1;
                $.getJSON(
                      "http://lmu-diabolical.appspot.com/items/spawn",
                    {
                        level: 50,
                        slot: "body"
                    },
                      function (item) {
                          // Mmmmm, new item.
                          var info = [];

                          info.push($("<div></div>").text("Item " + numItem));
                          info.push($("<div></div>").text("Name: " + item.name));
                          info.push($("<div></div>").text("ID: " + item.absorption));
                          info.push($("<div></div>").text("atkspeed: " + item.atkspeed));
                          info.push($("<div></div>").text("Blockchance: " + item.blockchance));
                          info.push($("<div></div>").text("CritChance: " + item.critchance));
                          info.push($("<div></div>").text("Defense: " + item.defense));
                          info.push($("<div></div>").text("level: " + item.level));
                          info.push($("<div></div>").text("MaxDamage: " + item.maxdamage));
                          info.push($("<div></div>").text("mindamage: " + item.mindamage));
                          info.push($("<div></div>").text("Slot: " + item.slot));
                          info.push($("<br>").text(""));
                          $("#char-info").append(info);
                          // console.log(item);
                      }
                  );
            });
        }
    };
})();
