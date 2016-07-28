import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  var ChatSimple = [
    {
      sender : 'Paulo Marcelo',
      receive : 'all',
      message : 'Olá...estão me ouvindo?'
    },
    {
      sender : 'José',
      receive : 'Paulo Marcelo',
      message : 'Sim, consigo te ouvir'
    }
  ];

  _.each(ChatSimple,function(chat){
    Chat.insert(chat);
  })
});
