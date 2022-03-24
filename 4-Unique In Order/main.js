/**Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
 * 
 * uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
   uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
   uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 * 
 */

function uniqueInOrder(datos) {
    let arr = [];


    for (let i = 0; i < datos.length; i++) {

        if (datos[i] !== datos[i + 1]) { //en cada posicion pregunto si datos[0] es diferente de datos[0+1] en caso de que sea true agrego el elemento datos[i].ej: 'A' !== 'B' datos[i+1]-> true si es false no hago nada y sigo con el siguente elemento
            arr.push(datos[i]);
        }

    }

    return arr;
}