Template.filter.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    var categoryFilter = event.target.categoryFilterInp.value;

    if (categoryFilter) {

    Session.set("categoryFilter", event.target.categoryFilterInp.value);

  }
  else {
    Session.set("categoryFilter", "Inbox");
  }

},
categoryTypeAheadVals: function() {
  ca = Todos.find({}, {categories: 1}).fetch().map(function(it){ return it.categories; });
  y = [];
  y = y.concat.apply(y, ca);
  console.log(y);
  return y;
}


});
