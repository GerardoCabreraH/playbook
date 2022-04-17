export default class TrendingTopic {
    constructor(name, numberOfTweets, numberOfResponses, numberOfRetweets, numberOfLikes) {
        this.name = name,
        this.numberOfTweets = numberOfTweets
        this.numberOfResponses = numberOfResponses,
        this.numberOfRetweets = numberOfRetweets,
        this.numberOfLikes = numberOfLikes
    }

    get totalOfMentions() {
        return this.numberOfTweets + this.numberOfResponses + this.numberOfRetweets + this.numberOfLikes
    }

    get GeneralInfo() {
        return `Nombre del hastag: ${this.name} Numero de tweets: ${this.numberOfTweets}`
    }
}