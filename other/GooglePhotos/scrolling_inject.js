var vieww = document.querySelector("#yDmH0d > c-wiz > div.h8plyb.HnzzId > c-wiz");
var tgl="false";

function loadmore(hh){
if(tgl=="true"){
vieww.scrollBy(0,hh);
setTimeout(function(){
    loadmore(200)
}, 2000);
} else {
console.log("stopping");
//break;
}
}

function toggle() {
    if (tgl == "true"){
    tgl = "false";
console.log("toggle is now: "+tgl);
	//break;
    } else {
tgl = "true"; 
console.log("toggle is now: "+tgl);
//break;
}
	
}

document.addEventListener('keydown',function(e){
    var key = e.keyCode || e.which;
    if(key == 38){
        toggle();
    }
	if(key == 40){
        loadmore(200);
    }

})
