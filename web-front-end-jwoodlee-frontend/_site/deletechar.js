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
window.DelChar = (() => {
    return {
        init: () => {
            var delCharButton = $("#delchar-button");
            var charID = $("#char-id");
            delCharButton.click(() => {
                $.ajax({
                    type: 'DELETE',
                    url: "http://lmu-diabolical.appspot.com/characters/" + charID.val(),
                    success: function () {
                        alert("Successfully deleted!");
                          // console.log("Gone baby gone." + textStatus);
                          // console.log(data);
                          // console.log(jqXHR);
                    }
                });
            });
        }
    };
})();
