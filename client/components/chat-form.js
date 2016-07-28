Template.chatForm.events({
  'submit form' : function(event) {
    event.preventDefault();

    var novoChat = {
      message : event.target.message.value,
      sender: event.target.sender.value,
      receive: event.target.to.value
    };

    Chat.insert(novoChat);
  }
})
