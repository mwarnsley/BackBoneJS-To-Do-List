$(document).ready(function(){
	var toDoItems = new ToDoItems([
		new ToDoItem({ description : "ToDoItem 1"}),
		new ToDoItem({ description : "ToDoItem 2"}),
		new ToDoItem({ description : "ToDoItem 3"})
	]);
	
	var toDoItemsView = new ToDoItemsView({
		model: toDoItems
	});
	$("body").append(toDoItemsView.render().$el);
});