export default class User {
    constructor(name, email, profile_image, cover_image, friends_number) {
        this.name = name,
        this.email = email,
        this.profile_image = profile_image,
        this.cover_image = cover_image,
        this.friends_number = friends_number
    }

    get totalFriends() {
        return this.friends_number
    }

    get generalInfo() {
        return `Nombre: ${this.name} Email: ${this.email}`
    }
}
