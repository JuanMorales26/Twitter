const User = require('./../../app/models/User')

describe("Test Unit for User Class", () => {
    test("1) Testing the User Class Constructor", () => {
        const Juan = new User("@JuanMorales","JuanMorales26","Juan Morales","Joven de 26 años estudiante de Node JS") 
        expect(Juan.id).toBe("@JuanMorales");
        expect(Juan.user).toBe("JuanMorales26");
        expect(Juan.name).toBe("Juan Morales");
        expect(Juan.bio).toBe("Joven de 26 años estudiante de Node JS");
        expect(Juan.dataCreated).not.toBeUndefined();
        expect(Juan.lastUpdated).not.toBeUndefined();
    });
    test("2) Adding Getters", () => {
        const user = new User("@JuanMorales","JuanMorales26","Juan Morales","Joven de 26 años estudiante de Node JS")
        expect(user.getUsername()).toBe("Juan Morales");
        expect(user.getBio()).toBe("Joven de 26 años estudiante de Node JS");
        expect(user.getDataCreated()).not.toBeUndefined();
        expect(user.getLastUpdated()).not.toBeUndefined();
    });
    test("3) Adding Setters", () => {
        const user = new User("@JuanMorales","JuanMorales26","Juan Morales","Joven de 26 años estudiante de Node JS");
        user.setUsername("Santiago");
        expect(user.name).toBe("Santiago");
        user.setBio("Adulto mayor de 45 años experimentando el mundo de la programación");
        expect(user.bio).toBe("Adulto mayor de 45 años experimentando el mundo de la programación");
    });
})