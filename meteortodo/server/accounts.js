//Accounts.config({
  //  sendVerificationEmail: true
//});


Accounts.onCreateUser(function(options, user) {
    var userEmail = user.emails[0].address;
    var fromEmail = "TaylorAckley@gmail.com";
    var subject = "Welcome";
    var emailTxt = "Welcome or something";
    Meteor.call("sendEmail", userEmail, fromEmail, subject, emailTxt);
    user.profile = options.profile;
    return user;
    });


Accounts.onLogin(function(user) {
    Meteor.call("incrementLoginCnt", user.user._id);
    console.log("Logging in user");
    console.log(user);
    console.log(user.user.profile.loginCount);
    return user;
});
