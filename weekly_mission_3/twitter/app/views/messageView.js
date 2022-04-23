const MessageService = require('./../services/messageService')

class MessageView{

  static createMessage(payload){
    return MessageService.create(payload.message, payload.username_receiver, payload.username_receptor)
  }

}

module.exports = MessageView