var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope){
	
	$scope.todos=[
	{text: 'Books',done: 'False'},
	{text: 'Pen', done: 'False'}
	];
    $scope.todolength=function(){
        return $scope.todos.length;
    }
    $scope.clearTodo=function(){
         $scope.errortext = "";
        $scope.todos= $scope.todos.filter(function(x){
            return !x.done;
        })
    }
    $scope.addTodo=function(){
        if( !$scope.todoText)
            {
                return ;
            }
        $scope.todos.push({text:$scope.todoText, done:'False'});
        $scope.todoText='';
    }
    
   
        

});