Template.home.helpers({

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

// Use UI.registerHelper..
UI.registerHelper("formatDate", function(datetime) {
  if (moment) {
    // can use other formats like 'lll' too
    return moment(datetime).format("dddd, MMMM Do YYYY");
  }
  else {
    return datetime;
  }
});

UI.registerHelper("daysSince", function(datetime) {
  if (moment) {
    // can use other formats like 'lll' too
    return moment(datetime).fromNow();
  }
  else {
    return datetime;
  }
});
