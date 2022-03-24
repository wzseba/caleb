function validString(llaves) {
    let arreglo = [];
    let cadena = [];
    cadena = llaves.split('');

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === '(' || cadena[i] === '[' || cadena[i] === '{' || cadena[i] === ')' || cadena[i] === ']') {
            arreglo.push(cadena[i]);
        }
    }
    arreglo.sort();




    return arreglo;
}
validString('[({})]]');