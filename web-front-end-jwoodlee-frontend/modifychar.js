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
window.ModifyChar = (() => {
    return {
        init: () => {
            var id = $("#id");
            var name = $("#name");
            var classType = $("#classType");
            var gender = $("#gender");
            var updateCharButton = $("#updatechar-button");

            updateCharButton.click(() => {
                var levelV = $("#level").val();
                var moneyV = $("#money").val();
                if (isNaN(levelV) || isNaN(moneyV)) {
                    alert("You entered a non number value for level or " +
                     "money amount, as a result they have both been set to one in your new character.");
                    levelV = 1;
                    moneyV = 1;
                }
                $.ajax({
                    type: 'PUT',
                    url: "http://lmu-diabolical.appspot.com/characters/" + id.val(),
                    data: JSON.stringify({
                        id: id.val(),
                        name: name.val(),
                        classType: classType.val(),
                        gender: gender.find("option:selected").val(),
                        level: levelV,
                        money: moneyV
                    }),
                    contentType: "application/json",
                    dataType: "json",
                    accept: "application/json",
                    success: function () {
                        alert("Success! View Modified Character here: " +
                        "http://lmu-diabolical.appspot.com/characters/" + id.val());
                        // console.log("Done: no news is good news.");
                    }
                });
            });
        }
    };
})();
