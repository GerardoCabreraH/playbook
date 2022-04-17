export default class Travel {
    constructor(start, end, type, travelCount, timeskip, pricePerKm, method, status) {
        this.start = start
        this.end = end
        this.type = type
        this.travelCount = travelCount
        this.timeskip = timeskip
        this.pricePerKm = pricePerKm
        this.method = method
        this.status = status
    }

    get totalTravel () {
        return this.travelCount * this.pricePerKm
    }

    get travelInfo () {
        return `Recorrido Ida: ${this.start} - Recorrido Vuelta: ${this.end}`
    }
}