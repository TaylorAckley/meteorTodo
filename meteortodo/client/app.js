Template.body.helpers({

  todos: function() {
    return Todos.find();
  },

  todoCount: function() {
    return Todos.find().count();
  }

});

// adds index to each item
UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});
