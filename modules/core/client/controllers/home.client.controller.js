'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
    function($scope, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;
        $scope.alerts = [{
                icon: 'glyphicon-user',
                colour: 'btn-success',
                total: '20,408',
                description: 'TOTAL CUSTOMERS'
            }, {
                icon: 'glyphicon-calendar',
                colour: 'btn-primary',
                total: '8,382',
                description: 'UPCOMING EVENTS'
            }, {
                icon: 'glyphicon-music',
                colour: 'btn-success',
                total: '527',
                description: 'NEW CUSTOMERS IN 24 HOURS'
            }, {
                icon: 'glyphicon-heart',
                colour: 'btn-info',
                total: '85,000',
                description: 'EMAILS SENT'
            }, {
                icon: 'glyphicon-star',
                colour: 'btn-warning',
                total: '268',
                description: 'FOLLOW UPS REQUIRED'
            }, {
                icon: 'glyphicon-signal',
                colour: 'btn-danger',
                total: '348',
                description: 'REFERRALS TO MEDERATE'
            },

        ];
    }
]);
