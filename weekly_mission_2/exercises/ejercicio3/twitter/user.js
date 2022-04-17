export default class User {
    constructor(user, username, bio, age) {
        this.user = user,
        this.username = username,
        this.bio = bio,
        this.age = age
    }

    get nameAndAgeUser() {
        return `Nombre completo: ${this.name} Edad: ${this.age}`
    }

    get generalInfo() {
        return `Nombre de usuario: ${this.username} Descripción: ${this.bio}`
    }
}