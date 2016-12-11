var todoList = {
	//store Todos
	todo: [],
	
	//display todos
	displayTodo: function(){
		console.log('My todos:', this.todo);
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