Template.todoForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    var getNextSort = function() {
        //TODO refactor this
        var getLastCount = Todos.find({userid: Meteor.userId()}).count();
        console.log(getLastCount);
        if (getLastCount === 0) {
        console.log("No sortOrder detected, returning default SO (1)");
          return Number(1);
        }
        else {
          var getLast = Todos.findOne({userid: Meteor.userId()}, {sort: {sortOrder: -1}});
          var oldSortValue = getLast.sortOrder;
          var nextSort = oldSortValue + 1;
          console.log(nextSort);
        return nextSort;
        }
    };

    var categoriesJoined = ['inbox'].concat(event.target.category.value
      .split(',')
      .toLowerCase()
      .map(function(category){ return category.trim(); })
      .filter(function(category){ return !!category; }));

    // get the data we need from the form
    var newTodo = {
      title: event.target.title.value,
      isComplete: false,
      categories: categoriesJoined,
      userid: Meteor.userId(),
      CreatedOn: new Date(),
      sortOrder: getNextSort()

    };
    console.log(newTodo);

    Meteor.call("addTodo", newTodo);
  }

});

Template.todoForm.helpers({
  categoryTypeAheadVals: function() {
    ca = Todos.find({}, {categories: 1}).fetch().map(function(it){ return it.categories; });
    y = [];
    y = y.concat.apply(y, ca);
    console.log(y);
    return y;
  }

});
