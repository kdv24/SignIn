var signIn = angular.module('signIn', ['ui.router']);

signIn.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    });

    $stateProvider.state('check-in-page', {
        url: "check-in-page",
        templateUrl: "partials/check-in-page.html",
        controller: 'SignInCtrl'
    });

// check to be sure is : in front of url if needed and . if nested
    $stateProvider.state('who-is-here', {
        url: "who-is-here",
        templateUrl: "partials/who-is-here.html",
        controller: 'SignInCtrl'
    });
});
