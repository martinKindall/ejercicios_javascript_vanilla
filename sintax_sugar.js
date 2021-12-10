function saludarAmigo(amigo, miNombre) {
    console.log(`Hola ${amigo}, mi nombre es ${miNombre}`);
}

function robotFactory(name) {
    return {
        name: name,
        saludarAmigos: function(amigos) {
            for (const amigo of amigos) {
                saludarAmigo(amigo, this.name);
            }
        },
    };
}

const yoRobot = robotFactory('Sonny');
yoRobot.saludarAmigos(['Martin', 'Lucia']);