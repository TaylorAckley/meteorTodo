Template.todo.events({

  "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        Meteor.call("toggleChecked", this._id, ! this.isComplete);
      },
      "click .delete": function () {
        Meteor.call("deleteTodo", this._id);
      },
      'click #open': function () {
        $("#menu").trigger("open.mm");
      },
      'click #close': function () {
        $("#menu").trigger("close.mm");
      }
});
