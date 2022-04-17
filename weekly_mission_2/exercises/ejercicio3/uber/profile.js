export default class Profile {
    constructor(profile, name, phone, ubication, language, email) {
        this.profile = profile
        this.name = name
        this.phone = phone
        this.ubication = ubication
        this.language = language
        this.email = email
    }

    get languageUser () {
        return this.language
    }

    get profileInfo () {
        return `Nombre: ${this.name} Ubicación: ${this.ubication}`
    }
}