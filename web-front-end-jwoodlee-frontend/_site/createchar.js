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
window.CreateChar = (() => {
    return {
        init: () => {
            var name = $("#name");
            var classType = $("#classType");
            var gender = $("#gender");
            var createCharButton = $("#createchar-button");

            createCharButton.click(() => {
                var levelV = $("#level").val(); //insert slider here
                var moneyV = $("#money").val();
                if (isNaN(levelV) || isNaN(moneyV)) {
                    alert("You entered a non number value for level or money amount, " +
                    "as a result they have both been set to one in your new character.");
                    levelV = 1;
                    moneyV = 1;
                }
                $.ajax({
                    type: 'POST',
                    url: "http://lmu-diabolical.appspot.com/characters",
                    data: JSON.stringify({
                        name: name.val(),
                        classType: classType.val(),
                        gender: gender.find("option:selected").val(),
                        level: levelV,
                        money: moneyV
                    }),
                    contentType: "application/json",
                    dataType: "json",
                    accept: "application/json",
                    complete: function (jqXHR) {
                      // The new character can be accessed from the Location header.
                        alert("Success! You may access the new character at:" +
                          jqXHR.getResponseHeader("Location"));
                    }
                });
            });
        }
    };
})();
