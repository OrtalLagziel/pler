angular.module('templates-ppl', ['ppl.html']);

angular.module("ppl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ppl.html",
    "<span>Hello {{name}}</span>\n" +
    "");
}]);
