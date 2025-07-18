//Ejercicio 17
// For...in: Usa un for...in para imprimir 
// por consola los datos del alienígena.
// Debería tener este formato cada uno de los console.log: 
// "La propiedad ____ tiene cómo valor: ____"

// Puedes usar este objeto:

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const propiedad in alien) {
    const valor = alien[propiedad];
    console.log("La propiedad " + propiedad + " tiene cómo valor: " + valor);
}