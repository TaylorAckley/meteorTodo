Template.register.events({
    'submit .register-form': function (event) {

        event.preventDefault();

        var email = event.target.email.value;
        var password = s(event.target.password.value).trim().value();
        var firstname = s(event.target.firstname.value).trim().capitalize().value();
        var lastname = s(event.target.lastname.value).trim().capitalize().value();
        var nameConc = firstname + " " + lastname;
        var handle = "@" + firstname + lastname;
        var defaultLogin = Number(0);

        var user = {
        email: email,
        password: password,
        profile: {
          name: nameConc,
          handle: handle,
          loginCount: 0

        }

      };

        Accounts.createUser(user,function(err){
            if(!err) {
              console.log("New user created!");
              console.log(user);
                Router.go('/home');
            }
        });
    }
});
