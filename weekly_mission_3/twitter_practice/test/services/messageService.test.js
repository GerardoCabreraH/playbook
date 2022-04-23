const MessageService = require('../../app/services/messageService')

describe("Tests for MessageService", () => {

  test("Create a new tweet", () => {
    const message = MessageService.create("Message", "Gerardo", "Cabrera")
    expect(message.message).toBe("Message")
    expect(message.receiver).toBe("Gerardo")
    expect(message.receptor).toBe("Cabrera")
  })

})
