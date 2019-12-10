(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bottomContainer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id = \"bottom-container\">\n    <div class = \"bottom-button-container\">\n        <button id = \"clear-button\" class = \"bottom-buttons\">CLEAR</button>\n        <button id = \"save-button\" class = \"bottom-buttons\">SAVE</button>\n    </div>\n</section>\n";
},"useData":true});
templates['header'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <title>Note++</title>\n    </head>\n    <header>\n      <div class=\"header-image-container\">\n      </div>\n      <h1 class=\"site-title\"><a href=\"#\">Note++</a></h1>\n    </header>\n</html>";
},"useData":true});
templates['note'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.subnote,depth0,{"name":"subnote","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\"note-container\">\n    <div class=\"note-description\">\n        <h4>"
    + alias4(((helper = (helper = helpers.typeName || (depth0 != null ? depth0.typeName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeName","hash":{},"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":24}}}) : helper)))
    + "</h4>\n        <textarea>"
    + alias4(((helper = (helper = helpers.noteDescription || (depth0 != null ? depth0.noteDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"noteDescription","hash":{},"data":data,"loc":{"start":{"line":4,"column":18},"end":{"line":4,"column":37}}}) : helper)))
    + "</textarea>\n    </div>\n    <div class=\"note-content\" id=\"note-content-container\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.subnotes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":9,"column":18}}})) != null ? stack1 : "")
    + "\n\n      </div>\n \n </section>\n";
},"usePartial":true,"useData":true});
templates['subnote'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"subnote\">\n    <div class=\"template-icon-container\">\n        <img class=\"template-icon\" src=\"/icons/"
    + alias4(((helper = (helper = helpers.iconName || (depth0 != null ? depth0.iconName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconName","hash":{},"data":data,"loc":{"start":{"line":3,"column":47},"end":{"line":3,"column":59}}}) : helper)))
    + ".png\" alt=\""
    + alias4(((helper = (helper = helpers.typeName || (depth0 != null ? depth0.typeName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeName","hash":{},"data":data,"loc":{"start":{"line":3,"column":70},"end":{"line":3,"column":82}}}) : helper)))
    + "\">\n     </div>\n    <textarea class=\"subnote-description\">"
    + alias4(((helper = (helper = helpers.noteDescription || (depth0 != null ? depth0.noteDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"noteDescription","hash":{},"data":data,"loc":{"start":{"line":5,"column":42},"end":{"line":5,"column":61}}}) : helper)))
    + "</textarea>\n </div> \n";
},"useData":true});
templates['textButtonContainer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<aside class = \"text-button-container\">\n    <div class = \"textbox-filter-div\">\n        <select id = \"filter-text-style\" class = \"text-style\">\n            <option selected value>Font:</option>\n            <option>Arial</option>\n            <option>Lucida Handwritten</option>\n            <option>Monotype Corsiva</option>\n            <option>Times New Roman</option>\n            <option>Verdana</option>\n        </select>\n        <select id = \"filter-text-font\" class = \"text-font\">\n            <option selected value>Size:</option>\n            <option>4</option>\n            <option>6</option>\n            <option>8</option>\n            <option>10</option>\n            <option>12</option>\n            <option>14</option>\n            <option>16</option>\n            <option>18</option>\n        </select>\n    </div>\n    <div class = \"text-button-div\">\n        <button id = \"notepad-button-one\" class = \"notepad-button\">Notepad 1</button>\n        <button id = \"notepad-button-two\" class = \"notepad-button\">Notepad 2</button>\n        <button id = \"notepad-button-three\" class = \"notepad-button\">Notepad 3</button>\n        <button id = \"notepad-button-four\" class = \"notepad-button\">Notepad 4</button>\n        <button id = \"add-button\" class = \"notepad-button\">Add</button>\n    </div>\n</aside>\n\n";
},"useData":true});
templates['toolbar'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.toolbarButton,depth0,{"name":"toolbarButton","data":data,"indent":"             ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <aside class=\"toolbar-container\">\n     <section id=\"current-note-container\">\n"
    + ((stack1 = container.invokePartial(partials.toolbarButton,depth0,{"name":"toolbarButton","hash":{"templateName":"back","iconName":"previous"},"data":data,"indent":"         ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.toolbarButton,depth0,{"name":"toolbarButton","hash":{"templateName":"current-note","iconName":(depth0 != null ? depth0.iconName : depth0)},"data":data,"indent":"         ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n      </section>\n     <section id=\"subnote-templates\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.subnoteTemplates : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":9},"end":{"line":11,"column":19}}})) != null ? stack1 : "")
    + "\n      </section>\n\n</aside>\n";
},"usePartial":true,"useData":true});
templates['toolbarButton'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"toolbar-button-container\">\n   <button type=\"button\" id=\""
    + alias4(((helper = (helper = helpers.templateName || (depth0 != null ? depth0.templateName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"templateName","hash":{},"data":data,"loc":{"start":{"line":2,"column":29},"end":{"line":2,"column":45}}}) : helper)))
    + "-toolbar\">\n      <img src=\"/icons/"
    + alias4(((helper = (helper = helpers.iconName || (depth0 != null ? depth0.iconName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconName","hash":{},"data":data,"loc":{"start":{"line":3,"column":23},"end":{"line":3,"column":35}}}) : helper)))
    + ".png\" alt=\""
    + alias4(((helper = (helper = helpers.templateName || (depth0 != null ? depth0.templateName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"templateName","hash":{},"data":data,"loc":{"start":{"line":3,"column":46},"end":{"line":3,"column":62}}}) : helper)))
    + "\">\n    \n    </button> \n </div>\n";
},"useData":true});
})();