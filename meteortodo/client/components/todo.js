Template.todo.helpers({

});

// attach events to our poll template
Template.todo.events({

  "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        Tasks.update(this._id, {
          $set: {checked: ! this.checked}
        });
      },
      "click .delete": function () {
        Tasks.remove(this._id);
      }
});
