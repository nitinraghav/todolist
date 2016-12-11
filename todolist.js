var todoList = {
	//store Todos
	todo: [],
	
	//display todos
	displayTodo: function(){
		if (this.todo.length === 0){
			console.log('Your todolist is empty!');
		} else {
			console.log('My todos:');
			for (var i = 0; i < this.todo.length; i++){
				if(this.todo[i].completed === true){
					console.log('(X)', this.todo[i].todoText);
				} else {
					console.log('( )', this.todo[i].todoText);
				}
			}
		}
	},

	//add todos
	addTodo: function(todoText){
		this.todo.push({
			todoText : todoText,
			completed : false,
		});
		this.displayTodo();
	},

	//change todos
	changeTodo: function(position, todoText){
		this.todo[position].todoText = todoText;
		this.displayTodo();
	},

	//delete todos
	deleteTodo: function(position){
		this.todo.splice(position, 1);
		this.displayTodo();
	},

	toggleTodo: function(position){
		var todo = this.todo[position];
		todo.completed = ! todo.completed;
		this.displayTodo();
	},
};