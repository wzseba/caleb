/**Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */

function toCamelCase(str) {
    let arrayCadena = [];
    let regex = /[-]+/;
    arrayCadena = str.split('-');


    if (regex.test(str)) {

        for (let i = 1; i < arrayCadena.length; i++) {
            arrayCadena[i] = arrayCadena[i].charAt(0).toUpperCase() + arrayCadena[i].slice(1);
        }

        return arrayCadena.join('');
    } else {

        return str.split('_').join('');

    }

}