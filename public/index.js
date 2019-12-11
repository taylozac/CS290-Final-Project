var template = {
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
}


function saveNote(e) {
  var evtobj = window.event? event : e
  if (evtobj.ctrlKey && evtobj.shiftKey && evtobj.keyCode == 83) {
    alert("Would have saved.");
  }
}

document.onkeydown = saveNote;
