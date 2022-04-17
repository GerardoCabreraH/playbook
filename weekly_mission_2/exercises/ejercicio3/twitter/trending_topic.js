export default class TrendingTopic {
    constructor(name, description, type, datetime_diff, hastag, numberOfTweets) {
        this.name = name,
        this.description = description,
        this.type = type,
        this.datetime_diff = datetime_diff,
        this.hastag = hastag,
        this.numberOfTweets = numberOfTweets
    }

    get tweetsOfTrendingTopic() {
        return this.numberOfTweets
    }

    get generalInfo() {
        return `Nombre del tending: ${this.name} Tipo de tending: ${this.type} Fecha de mención: ${this.datetime_diff}`
    }
}