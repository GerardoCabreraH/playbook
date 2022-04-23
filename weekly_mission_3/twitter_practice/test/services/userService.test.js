const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "GerardoCabreraH", "Gerardo")
        expect(user.username).toBe("GerardoCabreraH")
        expect(user.name).toBe("Gerardo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "GerardoCabreraH", "Gerardo")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("GerardoCabreraH")
        expect(userInfoInList[2]).toBe("Gerardo")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "GerardoCabreraH", "Gerardo")
        UserService.updateUserUsername(user, "GeraCab94")
        expect(user.username).toBe("GeraCab94")
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "GerardoCabreraH1", "Gerardo")
        const user2 = UserService.create(1, "GerardoCabreraH2", "Gerardo")
        const user3 = UserService.create(1, "GerardoCabreraH3", "Gerardo")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("GerardoCabreraH1")
        expect(usernames).toContain("GerardoCabreraH2")
        expect(usernames).toContain("GerardoCabreraH3")
    })
})