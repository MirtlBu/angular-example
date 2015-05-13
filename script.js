var colorApp = angular.module('colorApp', []);

colorApp.controller('ColorList', function ($scope, $http) {

    $scope.colors = [];

    //получаем массив объектов get-запросом и сохраняем его в скоп
    $http.get('colors.json').
        success(function(data, status, headers, config) {
            $scope.colors = data.colorsArray;
        }).
        error(function(data, status, headers, config) {
            console.log('Something happened: ' + data);
        });

    //дефолтная сортировка по имени
    $scope.order = 'name';

    //удаляем элемент из скопа
    $scope.colorRemove = function(color) {
        var index = $scope.colors.indexOf(color);
        $scope.colors.splice(index, 1);
    };

    //переименовываем элемент из скопа
    $scope.colorRename = function(color) {
        var index = $scope.colors.indexOf(color);
        var newName = prompt('rename color');
        $scope.colors[index].colorName = newName;
    };

    //функция-фильтр, в которой возвращаем объект с заданным условием
    $scope.filterByRel = function(val) {
        return val.rel > 5;
    }
});