var currentDrawing = JSON.parse(currentDrawing.replace(/&quot;/g,'"'));
console.log(currentDrawing);

var currentStroke = [];

var nameTextarea = document.getElementById('name-textarea');
var canvas = document.getElementById('drawing');

var ctx;
var lastPt = null;
var offset;

function editDrawingName() {
   var nameTextarea = document.getElementById('name-textarea');
   currentDrawing.name = nameTextarea.value;
}

nameTextarea.addEventListener('change',editDrawingName, false);


function drawPrevious(stroke) {
   ctx.moveTo(stroke[0].x, stroke[0].y);
   for(var i = 1; i < stroke.length; i++) {
      ctx.lineTo(stroke[i].x, stroke[i].y);
      ctx.stroke();
      
      ctx.moveTo(stroke[i].x, stroke[i].y);
              
              
   }

}

function draw(event) {
   if(lastPt != null) {
      ctx.moveTo(lastPt.x, lastPt.y);
      ctx.lineTo(event.pageX - offset.x, event.pageY - offset.y);
      ctx.stroke();
   }
   lastPt = {x:event.pageX - offset.x, y:event.pageY - offset.y};
   currentStroke.push(lastPt);

}

function initCanvas() {
   ctx = canvas.getContext('2d');
   offset = {x:0, y:0};
   for(var i = 0; i < currentDrawing.strokes.length; i++) {
      console.log(currentDrawing.strokes[i]);
      drawPrevious(currentDrawing.strokes[i]);
   }
   
   if(window.PointerEvent) {
      
      canvas.addEventListener('pointerdown', function() {
         canvas.addEventListener('pointermove', draw, false);

      }, false);
      
      canvas.addEventListener('pointerup', function() {
         canvas.removeEventListener('pointermove', draw, false);
         
         currentDrawing.strokes.push(currentStroke);
         lastPt = null;

      }, false);  

   }
   else {

      canvas.addEventListener('mousedown', function() {
         canvas.addEventListener('mousemove', draw, false);

      }, false);
      
      canvas.addEventListener('mouseup', function() {
         canvas.removeEventListener('mousemove', draw, false);
         
         currentDrawing.strokes.push(currentStroke);
         lastPt = null;

      }, false);
  

   }

   

}

initCanvas();


function saveNote(e) {
  var evtobj = window.event? event : e
  if (evtobj.ctrlKey && evtobj.shiftKey && evtobj.keyCode == 83) {
    //alert("Would have saved.");
    save();
  }
}

document.onkeydown = saveNote;


function save () {
    console.log(currentDrawing);
    
    var postRequest = new XMLHttpRequest();
    var requestURL = "/drawing/" + currentDrawing.index  + "/save";

    postRequest.open('POST', requestURL);

    var requestBody = JSON.stringify({
        name: currentDrawing.name,
        index: currentDrawing.index,
        strokes: currentDrawing.strokes
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.addEventListener('load', function (event) {
        if (event.target.status !== 200) {
            var responseBody = event.target.response;
            alert("Error saving drawing on server side:" + responseBody);
        }
    });
    
    postRequest.send(requestBody);
}
