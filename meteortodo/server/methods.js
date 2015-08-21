Meteor.methods({
  addTodo: function (newTodo) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Todos.insert(newTodo);
  },
  deleteTodo: function (taskId) {
    Todos.remove(taskId);
  },
  toggleChecked: function (taskId, todoState) {
    Todos.update(taskId, { $set: { isComplete: todoState} });
  },

  incrementLoginCnt: function (userId) {
      var currentUser = Meteor.users.findOne({_id: userId});

      currentLoginCnt = currentUser.loginCount + 1;
      console.log("Updating users login count from: " + currentUser.loginCount + " to: " + currentLoginCnt);
    Meteor.users.update(currentUser, { $set: { loginCount: currentLoginCnt} });

  },

  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
console.log("Sending an email...");
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }

});
