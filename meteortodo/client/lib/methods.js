Meteor.methods({

getCurrentUserId: function() {
if (! Meteor.userId())   {
  return "User is not logged in";
}

else {
  return Meteor.userId();
}

}

});
