Template.todoForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newTodo = {
      title: event.target.title.value,
      description: event.target.description.value,
      due: event.target.due.value,
      priority: event.target.priority.value,
      categories: [
        {  category: event.target.category.value}
      ],
      isComplete: true
    };

    // create the new poll
    Todos.insert(newTodo);
  }

});
