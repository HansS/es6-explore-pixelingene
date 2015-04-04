function GreetingDirective($rootScope) {

    return {
        restrict: 'E',
        replace: true,
        template: '<div>Hello World</div>',
        link: (scope, element, attrs)=> {
            console.log($rootScope);
        }
    }
}


angular.module('app.module')
    .directive('greeting', GreetingDirective);