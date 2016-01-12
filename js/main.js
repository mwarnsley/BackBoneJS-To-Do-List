$(document).ready(function(){
	var toDoItem = new ToDoItem({
		description: "ToDoItem 1"
	});
	var toDoItemView = new ToDoItemView({
		model: toDoItem
	});
	$("body").append(toDoItemView.render().$el);
});