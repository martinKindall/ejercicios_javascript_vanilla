const unaLambda = function(nombre) {
    console.log(`Hola ${nombre}, que tal?`);
};

const unaArrowFunction = nombre => {
    console.log(`Hola ${nombre}, que tal?`);
}

const versionCorta = nombre => console.log(`Hola ${nombre}, que tal?`);

// unaLambda('Martin');
// unaArrowFunction('Martin');
// versionCorta('Martin');


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

const yoRobot = robotFactory('Sonny');
// yoRobot.saludarAmigos(['Martin', 'Lucía']);