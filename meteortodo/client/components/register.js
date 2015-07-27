Template.register.events({
    'submit .register-form': function (event) {

        event.preventDefault();


        var email = event.target.email.value;
        var password = event.target.password.value;
        var firstname = event.target.firstname.value;
        var lastname = event.target.lastname.value;

        var user = {'email':email,password:password,profile:{name:firstname +" "+lastname}};

        Accounts.createUser(user,function(err){
            if(!err) {
                Router.go('/home');
            }
        });

        Accounts.onCreateUser(function(options, user) {
            if (options.profile) {
                options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
                user.profile = options.profile;
            }
            return user;
        });
    }
});
