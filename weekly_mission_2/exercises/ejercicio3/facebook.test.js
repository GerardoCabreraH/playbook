import User from "./facebook/user";
import Post from "./facebook/post";
import Biography from "./facebook/biography";

test('1) Crear un usuario en Facebook', () => {
    const primerUsuarioFacebook = new User('Gerardo Rafael Cabrera Herrera', 'gerardorafael.cabrera@gmail.com', 'imagen_perfil.png', 'imagen_portada.png', 2);
    expect(primerUsuarioFacebook.name).toBe('Gerardo Rafael Cabrera Herrera');
    expect(primerUsuarioFacebook.email).toBe('gerardorafael.cabrera@gmail.com');
    expect(primerUsuarioFacebook.profile_image).toBe('imagen_perfil.png');
    expect(primerUsuarioFacebook.cover_image).toBe('imagen_portada.png');
    expect(primerUsuarioFacebook.friends_number).toBe(2);
});

test('2) Crear un post en Facebook', () => {
    const primerPostFacebook = new Post('Post1', 'Descripcion1', 'post1.png', 'Gerardo Rafael Cabrera Herrera', 'Public');
    expect(primerPostFacebook.title).toBe('Post1');
    expect(primerPostFacebook.description).toBe('Descripcion1');
    expect(primerPostFacebook.image).toBe('post1.png');
    expect(primerPostFacebook.author).toBe('Gerardo Rafael Cabrera Herrera');
    expect(primerPostFacebook.audience).toBe('Public');
});

test('3) Definir un biografia en Facebook', () => {
    const primerPostFacebook = new Biography('Gerardo Rafael Cabrera Herrera', 'Desarrollador web', 'Ingenieria', 'San Nicolas de los Garza', 'Monterrey', 'Pagina web', 'Futbol Americano', 'Arma Mortal', 'Los Simpson');
    expect(primerPostFacebook.name).toBe('Gerardo Rafael Cabrera Herrera');
    expect(primerPostFacebook.job).toBe('Desarrollador web');
    expect(primerPostFacebook.lastGradeSchoolship).toBe('Ingenieria');
    expect(primerPostFacebook.bornPlace).toBe('San Nicolas de los Garza');
    expect(primerPostFacebook.livePlace).toBe('Monterrey');
    expect(primerPostFacebook.webpage).toBe('Pagina web');
    expect(primerPostFacebook.likeSport).toBe('Futbol Americano');
    expect(primerPostFacebook.likeMovie).toBe('Arma Mortal');
    expect(primerPostFacebook.likeTvProgram).toBe('Los Simpson');
});
