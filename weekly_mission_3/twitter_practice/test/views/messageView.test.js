const MessageView = require('./../../app/views/messageView')

describe("Tests for MessageView", () => {
    
  test("Create a message by a given valid payload", () => {
    const payload = {message: "Message", username_receive: "Gerardo", username_receptor: "Cabrera"}
    const message = MessageView.createMessage(payload)
    expect(message.message).toBe("Message")
  })

})
