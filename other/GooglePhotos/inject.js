 var evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
    });
var aTags = document.getElementsByTagName("span");
var searchText = "Save";
var found;

for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].textContent == searchText) {
    aTags[i].dispatchEvent(evt);
 	break;
  }
}
