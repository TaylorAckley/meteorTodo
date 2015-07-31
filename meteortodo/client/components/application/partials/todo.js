Template.todo.events({

  "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        Meteor.call("toggleChecked", this._id, ! this.isComplete);
      },
      "click .delete": function () {
        Meteor.call("deleteTodo", this._id);
      }
});

Template.todo.helpers({
  settings: function() {
    return {
      position: "top",
      limit: 5,
      rules: [
        {
          token: '@',
          collection: Todos,
          field: "title",
          template: Template.titlePill
        },
        {
          token: 'tag:',
          collection: Todos,
          field: "tags",
          options: '',
          matchAll: true,
          template: Template.dataPiece
        }
      ]
    };
  }
});
