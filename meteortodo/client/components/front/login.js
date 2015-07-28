Template.login.events({
    'submit .login-form': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(email,password,function(err){
            if(!err) {
                Router.go('/home');
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
