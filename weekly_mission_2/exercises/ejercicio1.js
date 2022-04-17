/*Objectos simples*/
/*Github*/
const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `Este repositorio ${this.name} fue creado por ${this.author}`
    }
}
console.log("Nombre del repo: " + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
    title: "Dudas y preguntas del repositorio",
    repositoryNameAssociated: "LaunchX",
    status: "Open",
    numberOfComments: 50,
    labels: "documentation",
    author: "GerardoCabreraH",
    dateCreated: "14-04-2022 08:27",
    lastUpdated: "14-04-2022 13:27",
    getTitleAndAuthor: function () {
        return `Titulo del issue ${this.title} hecho por el autor ${this.author}`
    },
    getGeneralInfo: function () {
        return `El Issue ${this.title} esta relacionado con el repositorio ${this.repositoryNameAssociated}`
    }
}
console.log("Nombre del issue:" + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

const pull = {
    title: "Entrega de codigo",
    branchName: "main",
    dateCreated: "14-04-2022 15:35",
    status: "Open",
    repositoryNameAssociated: "LaunchX",
    author: "GerardoCabreraH",
    getStatus: function () {
        return this.branchName
    },
    getTitleAndAuthor: function () {
        return `Titulo del issue ${this.title} hecho por el autor ${this.author}`
    },
}
console.log("Nombre del pull: " + pull.title)
console.log("Rama comparada: " + pull.getStatus())
console.log(pull.getTitleAndAuthor())

const twitterUser = {
    user: "Gerardo Cabrera",
    username: "GerardoCabreraH",
    bio: "Biografia de Gerardo",
    age: 27,
    getNameAndAgeUser: function () {
        return `Nombre completo: ${this.name} Edad: ${this.age}`
    },
    getGeneralInfo: function () {
        return `Nombre de usuario: ${this.username} Descripción: ${this.bio}`
    }
}
console.log("Nombre del usuario de twitter:" + twitterUser.username)
console.log(twitterUser.getNameAndAgeUser())
console.log(twitterUser.getGeneralInfo())

/*Twitter*/
const twitterTendingTopic = {
    name: "Desarrollo Web",
    description: "Descripcion",
    type: "Tecnologia",
    datetime_diff: "Ayer",
    hastag: "#DesarrolloWeb",
    numberOfTweets: 50,
    getTweetsOfTrendingTopic: function () {
        return this.numberOfTweets
    },
    getGeneralInfo: function () {
        return `Nombre del tending: ${this.name} Tipo de tending: ${this.type} Fecha de mención: ${this.datetime_diff}`
    }
}
console.log("Nombre del trendig topic:" + twitterTendingTopic.name)
console.log(twitterTendingTopic.getTweetsOfTrendingTopic())
console.log(twitterTendingTopic.getGeneralInfo())

const twitterHastags = {
    name: "#DesarrolloWeb",
    numberOfTweets: 50,
    numberOfResponses: 20,
    numberOfRetweets: 25,
    numberOfLikes: 25,
    getTotalOfMentions: function () {
        return this.numberOfTweets + this.numberOfResponses + this.numberOfRetweets + this.numberOfLikes
    },
    getGeneralInfo: function () {
        return `Nombre del hastag: ${this.name} Numero de tweets: ${this.numberOfTweets}`
    }
}
console.log("Nombre del hastag:" + twitterHastags.name)
console.log("Total de mensiones del hastag: " + twitterHastags.getTotalOfMentions())
console.log(twitterHastags.getGeneralInfo())

/*Facebook*/
const userFacebook = {
    name: "Gerardo Rafael Cabrera Herrera",
    email: "gerardorafael.cabrera@gmail.com",
    profile_image: "imagen_perfil.png",
    cover_image: "imagen_portada.png",
    friends_number: 2,
    getTotalFriends: function () {
        return this.friends_number
    },
    getGeneralInfo: function () {
        return `Nombre: ${this.name} Email: ${this.email}`
    }
}
console.log("Nombre del usuario de facebook:" + userFacebook.name)
console.log("Total de amigos: " + userFacebook.getTotalFriends())
console.log(userFacebook.getGeneralInfo())

const postFacebook = {
    title: "Post1",
    description: "Descripcion1",
    image: "post1.png",
    author: "Gerardo Rafael Cabrera Herrera",
    audience: "Public",
    getPostAudience: function () {
        return this.audience
    },
    getGeneralInfo: function () {
        return `Nombre: ${this.title} Autor: ${this.author} Imagen: ${this.image}`
    }
}
console.log("Nombre del post:" + postFacebook.title)
console.log("Alcance del post: " + postFacebook.getPostAudience())
console.log(postFacebook.getGeneralInfo())

const biographyFacebook = {
    name: "Gerardo Rafael Cabrera Herrera",
    job: "Desarrollador web",
    lastGradeSchoolship: "Ingenieria",
    born_place: "San Nicolas de los Garza",
    live_place: "Monterrey",
    webpage: "Pagina web",
    likeSport: "Futbol americano",
    likeMovie: "Arma mortal",
    likeTvProgram: "Los Simpson",
    getUserBornPlace: function () {
        return this.born_place
    },
    getGeneralInfo: function () {
        return `Nombre: ${this.name} Ubicación: ${this.live_place}`
    }
}
console.log("Nombre del usuario de la biografia:" + biographyFacebook.name)
console.log("Lugar de nacimiento: " + biographyFacebook.getUserBornPlace())
console.log(biographyFacebook.getGeneralInfo())

/*Uber*/
const profileUber = {
    profile: "perfil.png",
    name: "Gerardo Cabrera",
    phone: 8183912893,
    ubication: "Mexico",
    language: "Spanish",
    email: "gerado@correo.com",
    getLanguageUser: function () {
        return this.language
    },
    getProfileInfo: function () {
        return `Nombre: ${this.name} Ubicación: ${this.ubication}`
    }
}
console.log("Nombre del usuario de uber:" + profileUber.name)
console.log("Lenguaje de Uber: " + profileUber.getLanguageUser())
console.log(profileUber.getProfileInfo())

const travelUber = {
    start: "Casa Gerardo",
    end: "Trabajo Celtech",
    type: "UberX",
    travelCount: 12,
    timeskip: 20,
    pricePerKm: 10.53,
    method: 'Cash',
    stauts: "Complete",
    getTotalTravel: function () {
        return this.travelCount * this.pricePerKm
    },
    getTravelInfo: function () {
        return `Recorrido Ida: ${this.start} - Recorrido Vuelta: ${this.end}`
    }
}
console.log("Tipo de viaje:" + travelUber.type)
console.log("Total del viaje: " + travelUber.getTotalTravel())
console.log(travelUber.getTravelInfo())
