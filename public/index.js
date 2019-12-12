/*var template = {
   "templateName": "Outline",
   "iconName": "list"
};

var note = {
   "typeName": "Outline",
   "iconName": "list",
   "noteDescription": "Friday Lecture 12/2",
   "subnotes": [],
   "subnoteTemplates": []
};

function new_subnote(note, template, description) {
   var subnote = {
       "typeName": template.templateName,
       "iconName": template.iconName,
       "noteDescription": description,
       "subnotes": [],
       "subnoteTemplates": []
   };

   note.subnotes.push(subnote);

   var subnoteHTML = Handlebars.templates.subnote(subnote);

   var subnotesSection = document.getElementById('note-content-container');
   subnotesSection.insertAdjacentHTML('beforeend', subnoteHTML);

  

}
for(var i=0; i < 20; i++) {
   new_subnote(note, template, i);
}*/


var currentDrawing = {
   name: "New Note",
   index: 0,
   strokes: []

};

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
   for(var i = 1; i < drawing.length; i++) {
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
    alert("Would have saved.");
  }
}

document.onkeydown = saveNote;
