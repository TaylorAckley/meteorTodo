Template.home.helpers({

  todos: function() {
    console.log("User is: " + Meteor.userId());
    //return Todos.find({userid: Meteor.userId()});
    return Todos.find({categories: Session.get("categoryFilter")});
  },


  todoCount: function() {
      var todoCountInt = Todos.find({userid: Meteor.userId(), categories: Session.get("categoryFilter")}).count();
      if (todoCountInt === 1) {
        return "You have 1 todo";
      }
      else if (todoCountInt === 0) {
        return "You have no todos";
      }
      else {
        return "You have " + todoCountInt + " todos";
      }

  },

  titleTypeAhead: function() {
    return Todos.find({}, {categories: 1}).fetch().map(function(it){ return it.title; });
  },
  categoryTypeAheadVals_old: function() {
    ca = Todos.find({}, {categories: 1}).fetch().map(function(it){ return it.categories; });
    y = [];
    var x = ca.forEach(function(it) {
      it.forEach(function(it){
        y.push(it);
      });
    });
    console.log(y);
    return y;
  },

  categoryTypeAheadVals: function() {
    ca = Todos.find({}, {categories: 1}).fetch().map(function(it){ return it.categories; });
    y = [];
    y = y.concat.apply(y, ca);
    console.log(y);
    return y;
  }

});


Template.home.onCreated(function () {
  Session.set("categoryFilter", "Inbox");
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

UI.registerHelper("fbPic", function(size) {
  return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=" + size;
});

Template.home.rendered = function() {
  Meteor.typeahead.inject();
};
