const wait = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms))

console.log('start')

wait()
  .then((_) => { console.log('worked') })
  .catch((e) => { console.log('did not work') })

console.log('end')

const otraPromise = Promise.resolve({tipo: 'gato'});

otraPromise
    .then(animal => {
        const descripcion = `El tipo del animal es ${animal.tipo}`;
        console.log(descripcion);
        return descripcion;
    })
    .then(descripcion => {
        return {
            titulo: 'Libro de animales',
            descripcion: descripcion,
        };
    })
    .then(libro => {
        console.log(`El libro es ${JSON.stringify(libro)}`);
        return guardar(libro);
    })
    .then(console.log)
    .catch(error => console.error(error))


function guardar(libro) {
    return Promise.resolve('guardado');
}