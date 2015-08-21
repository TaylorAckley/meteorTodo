//Accounts.config({
  //  sendVerificationEmail: true
//});


Accounts.onCreateUser(function(options, user) {
    if (options.profile && user.services.facebook) {
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;
    }
    return user;
    },

    function(user) {
      console.log("Sending user welcome email!");
      console.log(user.user.emails[0].address);
      var userEmail = user.user.emails[0].address;
      var fromEmail = "TaylorAckley@gmail.com";
      var subject = "Welcome";
      var emailTxt = "Welcome or something";
      Meteor.call("sendEmail", userEmail, fromEmail, subject, emailTxt);

      return user;

    });


Accounts.onLogin(function(user){
    console.log(user.user._id);
    Meteor.call("incrementLoginCnt", user.user._id);
    console.log(user.user.loginCount);
    return user;
});
