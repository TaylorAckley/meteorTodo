Template.todoForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    var CategoriesForm = event.target.category.value;
    var categoriestoSplit = [];
    categoriestoSplit = CategoriesForm.split(',');
    console.log(categoriestoSplit);

    // get the data we need from the form
    var newTodo = {
      title: event.target.title.value,
      description: event.target.description.value,
      due: event.target.due.value,
      priority: event.target.priority.value,
      categories: categoriestoSplit,
      userid: Meteor.userId(),
      CreatedOn: new Date(),
      userList: 'default'

    };
    console.log(newTodo);

    // create the new poll
    Meteor.call("addTodo", newTodo);
  }

});
