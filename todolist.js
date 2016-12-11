var todoList = {
	//store Todos
	todo: ['item 1', 'item 2', 'item 3'],
	
	//display todos
	displayTodo: function(){
		console.log('My todos:', this.todo);
	},

	//add todos
	addTodo: function(todo){
		this.todo.push(todo);
		this.displayTodo();
	},

	//change todos
	changeTodo: function(position, newValue){
		this.todo[position] = newValue;
		this.displayTodo();
	},

	//delete todos
	deleteTodo: function(position){
		this.todo.splice(position, 1);
		this.displayTodo();
	}
}