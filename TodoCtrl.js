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
         var oldList= $scope.todos;
        $scope.todos=[]; 
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todos.push(x);
        });
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