Template.sideMenu.events({
    'click #open': function () {
      $("#menu").trigger("open.mm");
    },
    'click #close': function () {
      $("#menu").trigger("close.mm");
    }
  });

  Template.sideMenu.helpers({
displayIDConn: function() {
  console.log(this);
  return this;

},
displayID: function() {
  console.log(this.data.dataID);
  return this.data.dataID;
}
    });

  Template.sideMenu.rendered = function() {
    console.log(this.data.dataID);
    var todoContext = Todos.findOne({_id:this.data.dataID});
    console.log(todoContext);
    $("#menu").mmenu({
      classes: "mm-white",
        // mm-white mm-black mm-light
      header: true,
      buttonbar: "Buttonbar",
      counters: true,
      footer: {
         footer: {
            add: true,
            content: "(c) 2015"
         }
      },
      offCanvas: {
            position  : "right",
            zposition : "front"
         },
      onClick: {
          blockUI: false,
          close: true,
          preventDefault: false,
          setSelected: true
      }
    },{
        transitionDuration: 100  // does not seem to work
    });

  };
