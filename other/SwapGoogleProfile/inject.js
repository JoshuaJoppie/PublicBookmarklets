var myArray = [0, 1];
var pathn = window.location.pathname;
var test0 = parseInt(pathn.split("u/")[1].split("/")[0]);

var currently = 0
if (test0>-1){
var currently = test0;
}
//console.log("currently: "+currently);

var name = window.name.replace ( /[^\d.]/g, '' );
if (parseInt(name) > -1){
//console.log("window.name: "+name);
var currentuser = parseInt(name);
} else {
var currentuser = currently;

}
var myIndex = currentuser;
 var calc = myArray[myIndex++%myArray.length];
if (calc == currently){
var calc = myArray[myIndex++%myArray.length];
}
//console.log("calc: "+name);
 window.name = myIndex++%myArray.length;
 window.location.pathname = pathn.replace("/u/" + currently, "/u/" + calc );
