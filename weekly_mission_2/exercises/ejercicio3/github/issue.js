export default class Issue {
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated) {
        this.title = title,
        this.repositoryNameAssociated = repositoryNameAssociated,
        this.status = status,
        this.numberOfComments = numberOfComments,
        this.labels = labels,
        this.author = author,
        this.dateCreated = dateCreated,
        this.lastUpdated = lastUpdated
    }

    get titleAndAuthor() {
        return `Titulo del issue ${this.title} hecho por el autor ${this.author}`
    }

    get generalInfo() {
        return `El Issue ${this.title} esta relacionado con el repositorio ${this.repositoryNameAssociated}`
    }
}