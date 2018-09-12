//get all spans
var aTags = document.getElementsByTagName("span");
//loop through span fields
for (var i = 0; i < aTags.length; i++) {
    //if it has a title (tooltip)
    if (aTags[i].title.length > 0) {
          //set the span to equal the text of the span + it's title (tooltip)
            aTags[i].innerText = "(" + aTags[i].innerText + " ) - " + aTags[i].title;
    }
}

//I got it to work within one line.
//for (var aTags = document.getElementsByTagName("span"), i = 0; i < aTags.length; i++) aTags[i].title.length > 0 && (aTags[i].innerText = "(" + aTags[i].innerText + " ) - " + aTags[i].title);
