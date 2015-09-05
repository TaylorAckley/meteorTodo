Template.login.events({
    'submit .login-form': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(email,password,function(err){
            if(!err) {
                Router.go('/home');
            } else {
              var message = "There was an error logging in: <strong>" + error.reason + "</strong>";

                template.find('#form-messages').html(message);
            }

        });
    },

    'click .btn-facebook':function(event){
        event.preventDefault();
        Meteor.loginWithFacebook(function(err){
            if(!err) {
                Router.go('/home');
            }
        });
    },

    'click .btn-twitter':function(event){
        event.preventDefault();
        Meteor.loginWithTwitter(function(err){
            if(!err) {
                Router.go('/home');
            }
        });
    }


});

Template.login.helpers({
  getLoginFlag: function(){
    return Router.current().params.hash;
  }
});
