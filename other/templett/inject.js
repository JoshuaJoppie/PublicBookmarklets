function downloadSvg(svgData, name) {
    var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function jjoppie_alert(err, title) {
    alert(title+'\nError: ---\n'+err+'\n---');
}

var response = prompt('Please choose an option below.\n\n[1]: Remove "Demo" Overlay\n[2]: Export Selected Object to SVG\n[3]: Export Entire Canvas to SVG\n',"1");

switch(response) {
    case '1':
            console.log("Remove demo overlay");
            try {
                canvasarray[0].setOverlayColor();
                canvasarray[0].renderAll();
              }
              catch(err) {
                jjoppie_alert(err.message, "Remove Demo Overlay")
              }
            
      // code block
      break;
    case '2':
            console.log("Export selected object");
            try{        
            tempcanvas.clear();
            canvasarray[0].getActiveObject().clone(function(clone) {
            tempcanvas.setWidth(clone.width * clone.scaleX),
            tempcanvas.setHeight(clone.height * clone.scaleY),
            clone.originX = "center",
            clone.originY = "center",
            tempcanvas.add(clone),
            clone.viewportCenter();
        });
        var svgTempData = tempcanvas.toSVG();
        downloadSvg(svgTempData, "selected_Object.svg")
    }
    catch(err) {
        jjoppie_alert(err.message, "Export Selected Object")
    }
      // code block
      break;
    case '3':
            console.log("export all");
            console.log(response);
            try{
            downloadSvg(canvasarray[0].toSVG(), "entire_Canvas.svg");
        }
        catch(err) {
            jjoppie_alert(err.message, "Export Entire Canvas")
        }
      // code block
      break;
    default:
        if(response != null){
            jjoppie_alert('Not a valid Response: '+response, "Templett Hax\n")
        }
        console.log("defaulted");
      break;
  }
