export default class PullRequest {
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated, author) {
        this.title = title,
        this.branchName = branchName,
        this.dateCreated = dateCreated,
        this.status = status,
        this.repositoryNameAssociated = repositoryNameAssociated,
        this.author = author
    }

    get statusPull() {
        return this.branchName
    }

    get generalInfo() {
        return `Titulo del issue ${this.title} hecho por el autor ${this.author}`
    }
}