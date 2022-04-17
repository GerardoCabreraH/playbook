export default class Repository {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits,
        this.stars = stars,
        this.forks = forks,
        this.issues_open = issues_open,
        this.issues_close = issues_close
    }

    get totalIssues(){
        return this.issues_open + this.issues_close
    }

    get generalInfo(){
        return `Este repositorio ${this.name} fue creado por ${this.author}`
    }
}