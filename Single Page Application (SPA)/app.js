// Create Angular application module angularjsSimpleWebsiteApp.

// Declare ngRoute as a dependency.

// Then configure the $routeProvider by defining the routes.

var app=angular.module("angularjsSimpleWebsiteApp",["ngRoute"]);

app.config(["$routeProvider",function($routeProvider){
   $routeProvider
   
    // register the routes and the templates
   .when('/home', {
            templateUrl: 'templates/home.html'
        })
   .when('/about', {
            templateUrl: 'templates/about.html'
        })
   .when('/contact', {
            templateUrl: 'templates/contact.html'
        })
  
     // the default route
     .otherwise({
            redirectTo: '/home'
        });

}]);