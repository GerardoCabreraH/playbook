import User from "./twitter/user";
import TrendingTopic from "./twitter/trending_topic";
import Hastag from "./twitter/hastag"

test('1) Crear un usuario de twitter', () => {
    const primerUsuarioTwitter = new User('Gerardo Cabrera', 'GerardoCabreraH', 'Biografia de Gerardo', 27);
    expect(primerUsuarioTwitter.user).toBe('Gerardo Cabrera');
    expect(primerUsuarioTwitter.username).toBe('GerardoCabreraH');
    expect(primerUsuarioTwitter.bio).toBe('Biografia de Gerardo');
    expect(primerUsuarioTwitter.age).toBe(27);
});

test('2) Definir un trending topic', () => {
    const PrimerTrendingTwitter = new TrendingTopic('Desarrollo Web', 'Descripcion', 'Tecnologia', 'Ayer', '#DesarrolloWeb', 50);
    expect(PrimerTrendingTwitter.name).toBe('Desarrollo Web');
    expect(PrimerTrendingTwitter.description).toBe('Descripcion');
    expect(PrimerTrendingTwitter.type).toBe('Tecnologia');
    expect(PrimerTrendingTwitter.datetime_diff).toBe('Ayer');
    expect(PrimerTrendingTwitter.hastag).toBe('#DesarrolloWeb');
    expect(PrimerTrendingTwitter.numberOfTweets).toBe(50);
});

test('2) Definir un hastag', () => {
    const PrimerHastagTwitter = new Hastag('#DesarrolloWeb', 50, 20, 25, 25);
    expect(PrimerHastagTwitter.name).toBe('#DesarrolloWeb');
    expect(PrimerHastagTwitter.numberOfTweets).toBe(50);
    expect(PrimerHastagTwitter.numberOfResponses).toBe(20);
    expect(PrimerHastagTwitter.numberOfRetweets).toBe(25);
    expect(PrimerHastagTwitter.numberOfLikes).toBe(25);
});