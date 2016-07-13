angular.module('pplm', ['templates-ppl', 'pascalprecht.translate' ])
.config(function($translateProvider) {
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
    })
  .directive('ppl', function($translate ) {
    'use strict';

    var controller = function ($scope, $element) {
    };

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
  });
