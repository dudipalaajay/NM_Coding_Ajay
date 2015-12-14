/*
* Application File
* */
var app = angular.module("MyExample",['ngRoute']);
app.constant("dataUrl", "data/getUser.json");
app.directive('spaHeader',function(){
    return{
        restrict:"EA",
        template:"<header class='clearfix'><h1>Brand</h1>" +
        "<ul class='utilities'><li><a href='#'>Nav Link 1</a> </li><li><a href='#'>Nav Link 2</a> </li><li><a href='#'>Nav Link 3</a> </li></ul>" +
        "<br clear='both' /></header>"
    }
});
app.directive('spaFooter',function(){
    return{
        restrict:"EA",
        template:"<footer><p>&copy; Copyright 2015, My Example Corp</p></footer>"
    }
})
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.otherwise({
        redirectTo : '/list'
    })
    .when('/list', {
        templateUrl : 'views/list.html',
        controller:'ListCtrl'
    })
    .when('/edit', {
        templateUrl : 'views/edit.html',
        controller:'EditCtrl'
    })
    }])
    .controller("MainCtrl",function($scope){
        $scope.sortByProp = "First"; // Default sortby - Age
        $scope.sortBy = function(prop){
           $scope.sortByProp = prop;
        }
        $scope.sort = function(item){
            return item[$scope.sortByProp];
        }
    })
    /*
    * Service to set and get user which is used passing user information while in routes
    * */
    .factory('userService',function(){
        var saveUser = {};
        return{
            setUser:function(data){
                saveUser = data;
            },
            getUser:function(){
                return saveUser;
            }
        }
    });
