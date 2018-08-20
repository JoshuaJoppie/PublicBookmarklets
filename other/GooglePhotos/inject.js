var aTags = document.getElementsByTagName("span");
var searchText = "Save";
var found;

for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].textContent == searchText) {
	 triggerMostButtons(aTags[i]);
  } else {
  }
}

function triggerMostButtons (buttonNode) {
    triggerMouseEvent (buttonNode, "mouseover");
    triggerMouseEvent (buttonNode, "mousedown");
    triggerMouseEvent (buttonNode, "mouseup");
    triggerMouseEvent (buttonNode, "click");
}

function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}

// https://stackoverflow.com/questions/15511381/normal-button-clicking-approaches-are-not-working-in-greasemonkey-script
