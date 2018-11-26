var nameoptions = ["Joppinator", "JDScripting", "JoshJop", "LittleJxx", "Lindz", "KaeSue"];
var votefor = "";



function triggerMostButtons(buttonNode) {
    triggerMouseEvent(buttonNode, "mouseover");
    triggerMouseEvent(buttonNode, "mousedown");
    triggerMouseEvent(buttonNode, "mouseup");
    triggerMouseEvent(buttonNode, "click");
}

function triggerMouseEvent(node, eventType) {
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent(eventType, true, true);
    node.dispatchEvent(clickEvent);
}



function voterun() {
    var votefor = document.getElementsByName("votefor")[0].value;
    var elList = document.querySelectorAll("input");
    elList.forEach(function(el) {
        if (el.value.indexOf("username") !== -1 || el.placeholder.indexOf("Minecraft Name") !== -1 || el.placeholder.indexOf("Minecraft Username") !== -1 || el.placeholder.indexOf("username") !== -1) {
            console.log(el);
            el.value = votefor;
            localStorage.setItem('votefor', votefor);
        }
    });
    if (grecaptcha.getResponse().length > 0) {
        var formmList = document.querySelectorAll("form");
        formmList.forEach(function(formm) {
            if (formm.outerHTML.indexOf("recaptcha") !== -1 && formm.id.indexOf("voteoptions") == -1 && formm.outerHTML.indexOf("search") == -1) {
                console.log(formm);

                try {
                    saveVote();
                } catch (err) {

                    var searchText = "Vote";
                    var found;

                    function runonAtags(aTags) {
                        for (var i = 0; i < aTags.length; i++) {
                            if (aTags[i].innerText.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || (aTags[i].value.toLowerCase().indexOf(searchText.toLowerCase()) > -1 && (aTags[i].type == "button" || aTags[i].type == "submit"))) {
                                console.log("yes::");
                                console.log(aTags[i]);
                                triggerMostButtons(aTags[i]);
                            } else {
                                //console.log("no::");
                                //console.log(aTags[i]);
                            }
                        }
                    }

                    var aTagss = document.getElementsByTagName("button");
                    runonAtags(aTagss);
                    var aTagss = document.getElementsByTagName("input");
                    runonAtags(aTagss);
                }
                // Do what you like with el
                // The needle is case sensitive
            }
        });
    } else {
        console.log("no");
    };
    // Do what you like with el
    // The needle is case sensitive

}

var keypad1 = document.createElement("div");
keypad1.innerHTML = '<form id="voteoptions">' +
    '  <select name="votefor">' +
    '  </select>' +
    '  <br><br>' +
    '</form>' +
    '  <button onclick="voterun()">Autofill</button>';
document.body.prepend(keypad1);

var selecter = document.getElementsByName("votefor")[0];


for (var i = 0; i < nameoptions.length; i++) {
    var opt = nameoptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selecter.appendChild(el);
}

if (localStorage.getItem('votefor') > 0 && nameoptions.indexOf(localStorage.getItem('votefor'))) {
    document.getElementsByName("votefor")[0].value = localStorage.getItem('votefor');
}
