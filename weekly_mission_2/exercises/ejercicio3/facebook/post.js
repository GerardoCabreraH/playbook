export default class Post {
    constructor(title, description, image, author, audience) {
        this.title = title,
        this.description = description,
        this.image = image,
        this.author = author,
        this.audience = audience
    }

    get postAudience() {
        return this.audience
    }

    get generalInfo() {
        return `Nombre: ${this.title} Autor: ${this.author} Imagen: ${this.image}`
    }
}
