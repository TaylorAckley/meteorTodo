Template.todo.events({

  "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        Todos.update(this._id, {
          $set: {isComplete: ! this.checked}
        });
      },
      "click .delete": function () {
        Todos.remove(this._id);
      }
});
