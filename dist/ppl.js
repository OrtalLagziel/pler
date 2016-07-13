/**
 * ppl
 * @version v0.0.1 - 2016-07-13
 * @link 
 * @author  <>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('templates-ppl', ['ppl.html']);

angular.module("ppl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("ppl.html",
    "<span>Hello {{name}}</span>\n" +
    "");
}]);

angular.module('pplm', ['templates-ppl', 'pascalprecht.translate' ])
.config(["$translateProvider", function($translateProvider) {
    'use strict';

    $translateProvider
        .preferredLanguage('en_US')
        .useSanitizeValueStrategy('escape')
        .translations('en_US', {
            'ppl': {
                'name': {
                    'first': 'Luke'
                }
            }
        })
        .useMissingTranslationHandlerLog();
    }])
  .directive('ppl', ["$translate", function($translate ) {
    'use strict';

    var controller = function ($scope, $element) {
    };
    controller.$inject = ["$scope", "$element"];

    return {
      restrict: 'EAC',
      scope: {
        name: '<'
      },
      templateUrl: 'ppl.html',
      controller: controller,

      link: function(scope, element, attr, ctrl) {
      }
    };
  }]);
