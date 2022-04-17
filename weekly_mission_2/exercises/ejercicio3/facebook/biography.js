export default class Biography {
    constructor(name, job, lastGradeSchoolship, bornPlace, livePlace, webpage, likeSport, likeMovie, likeTvProgram) {
        this.name = name,
        this.job = job,
        this.lastGradeSchoolship = lastGradeSchoolship,
        this.bornPlace = bornPlace,
        this.livePlace = livePlace
        this.webpage = webpage
        this.likeSport = likeSport,
        this.likeMovie = likeMovie
        this.likeTvProgram = likeTvProgram
    }

    get userBornPlace() {
        return this.born_place
    }

    get generalInfo() {
        return `Nombre: ${this.name} Ubicación: ${this.live_place}`
    }
}
