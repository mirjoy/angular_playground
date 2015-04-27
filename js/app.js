(function(){
	angular.module('myModule', ['ui.bootstrap']);
	
	var app = angular.module('store', []);
  
  app.controller("StoreController", function(){
  	this.products = gems;
  });
  
  var gems = [{ 
    	name: 'Azurite', 
    	price: 2.95,
    	canPurchase: true,
    	soldOut: false
    },
{ 
    	name: 'Sapphire', 
    	price: 5.95,
    	canPurchase: true,
    	soldOut: false
    }

    ];

})();



// var app = angular.module('toDoList', [ ]);

// app.controller('ListController', function($scope){

//  	$scope.todoList = [];

//  	$scope.currentTodo = "";

//  	$scope.addTodo = function(){
//  		var toDoObject = {
//  			name: $scope.currentTodo,
//  			finished: false
//  		}

//  		$scope.todoList.push(toDoObject);
//  		$scope.currentTodo = "";
//  	}

//  	$scope.delete = function(index){
//  		$scope.todoList.splice(index, 1)
//  	}

//  	$scope.finish = function(index){
//  		var item = $scope.todoList[index];
//  		item.finished = !item.finished;
//  	}

// });