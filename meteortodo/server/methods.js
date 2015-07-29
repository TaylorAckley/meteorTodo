Meteor.methods({
  addTodo: function (newTodo) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Todos.insert(user);
  },
  deleteTodo: function (taskId) {
    Todos.remove(taskId);
  },
  toggleChecked: function (taskId, todoState) {
    Todos.update(taskId, { $set: { isComplete: ! todoState} });
  }
});
