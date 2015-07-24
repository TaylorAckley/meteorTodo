Template.todo.helpers({

});

// attach events to our poll template
Template.todo.events({

  // event to handle clicking a choice
  'click .vote': function(event) {

    // prevent the default behavior
    event.preventDefault();

    // get the parent (poll) id
    var todoID = $(event.currentTarget).parent('.todo').data('id');
    var voteID = $(event.currentTarget).data('id');

    // create the incrementing object so we can add to the corresponding vote
    var voteString = 'categories.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;

    // increment the number of votes for this choice
    Todos.update(
      { _id: todoID },
      { $inc: action }
    );

  }

});
