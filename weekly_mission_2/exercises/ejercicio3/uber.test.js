import Profile from './uber/profile'
import Travel from './uber/travel'

test('1) Crear un usuario en Uber', () => {
    const primerUsuarioUber = new Profile('perfil.png', 'Gerardo Cabrera', 8183912893, 'Mexico', 'Spanish', 'gerado@correo.com');
    expect(primerUsuarioUber.profile).toBe('perfil.png');
    expect(primerUsuarioUber.name).toBe('Gerardo Cabrera');
    expect(primerUsuarioUber.phone).toBe(8183912893);
    expect(primerUsuarioUber.ubication).toBe('Mexico');
    expect(primerUsuarioUber.language).toBe('Spanish');
    expect(primerUsuarioUber.email).toBe('gerado@correo.com');
});

test('2) Crear un viaje en Uber', () => {
    const primerPostFacebook = new Travel('Casa Gerardo', 'Trabajo Celtech', 'UberX', 12, 20, 10.53, 'Cash', 'Complete');
    expect(primerPostFacebook.start).toBe('Casa Gerardo');
    expect(primerPostFacebook.end).toBe('Trabajo Celtech');
    expect(primerPostFacebook.type).toBe('UberX');
    expect(primerPostFacebook.travelCount).toBe(12);
    expect(primerPostFacebook.timeskip).toBe(20);
    expect(primerPostFacebook.pricePerKm).toBe(10.53);
    expect(primerPostFacebook.method).toBe('Cash');
    expect(primerPostFacebook.status).toBe('Complete');
});