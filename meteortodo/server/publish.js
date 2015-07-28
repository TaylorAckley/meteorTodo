Meteor.publish('theTodos', function() {
  //check(listId, String);

  return Todos.find({userid: this.userId});
});
