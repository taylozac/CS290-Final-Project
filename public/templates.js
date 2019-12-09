(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bottomContainer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id = \"bottom-container\">\n    <div class = \"bottom-button-container\">\n        <button id = \"clear-button\" class = \"bottom-buttons\">CLEAR</button>\n        <button id = \"save-button\" class = \"bottom-buttons\">SAVE</button>\n    </div>\n</section>\n";
},"useData":true});
templates['note'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.subnote,depth0,{"name":"subnote","data":data,"indent":"         ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"note-section\">\n   <h1>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.noteObject : depth0)) != null ? stack1.description : stack1), depth0))
    + "</h1>\n\n   <ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.noteObject : depth0)) != null ? stack1.children : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":5},"end":{"line":7,"column":15}}})) != null ? stack1 : "")
    + "   </ul>\n\n</div>\n";
},"usePartial":true,"useData":true});
templates['subnote'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li>\n   "
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":2,"column":3},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n</li>\n";
},"useData":true});
templates['textButtonContainer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<aside class = \"text-button-container\">\n    <div class = \"textbox-filter-div\">\n        <select id = \"filter-text-style\" class = \"text-style\">\n            <option selected value>Font:</option>\n            <option>Arial</option>\n            <option>Lucida Handwritten</option>\n            <option>Monotype Corsiva</option>\n            <option>Times New Roman</option>\n            <option>Verdana</option>\n        </select>\n        <select id = \"filter-text-font\" class = \"text-font\">\n            <option selected value>Size:</option>\n            <option>4</option>\n            <option>6</option>\n            <option>8</option>\n            <option>10</option>\n            <option>12</option>\n            <option>14</option>\n            <option>16</option>\n            <option>18</option>\n        </select>\n    </div>\n    <div class = \"text-button-div\">\n        <button id = \"add-button-one\" class = \"add-button\">Notepad 1</button>\n        <button id = \"add-button-two\" class = \"add-button\">Notepad 2</button>\n        <button id = \"add-button-three\" class = \"add-button\">Notepad 3</button>\n        <button id = \"add-button-four\" class = \"add-button\">Notepad 4</button>\n    </div>\n</aside>\n";
},"useData":true});
})();