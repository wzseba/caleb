/*In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

* With input 'a'
* Your function should return: ['a']
* With input 'ab'
* Your function should return ['ab', 'ba']
* With input 'aabb'
* Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
*/
//permutation in group n! / (n-r)!
function permutations(string){

    let arrayString = string.split('');
    let permutation = [];
    
    // if(string.length <= 2){
    //     if (string.length == 2){
    //         permutation.push(string, string[1]+string[0]);
    //     }else{
    //         permutation += string;
    //     }
    // }

    let posiblesPermutations = (arreglo, resultString = []) => {
        if(!arreglo.length){
            return permutation.push(resultString.join(''));
            
        }

        for(let i = 0 ; i < arreglo.length; i++){
            let copiaArreglo = arreglo.slice();
            let siguente = copiaArreglo.splice(i,1);
            posiblesPermutations(copiaArreglo, resultString.concat(siguente));
        }
    }
    
    posiblesPermutations(arrayString);

    const resultado = new Set(permutation);
    return [...resultado];
    
}

console.log(permutations('aa')); 