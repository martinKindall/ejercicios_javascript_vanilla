function robotFactory(name) {
    return {
        name: name,
        saludarAmigos: function(amigos) {
            amigos.forEach(function(amigo) {
                console.log(`Hola ${amigo}, mi nombre es ${this.name}`);
            });
        },
    };
}