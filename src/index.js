const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let numberArr = expr.split('');
    let tenStr = []

    for (let i = 0; i <= numberArr.length; i= i+ 0.01){
        let splisedArr = numberArr.splice(0, 10) ;
        tenStr.push(splisedArr.join(''))
       
    }
    // tenStr.push(numberArr.slice(0,10).join(''))

  

    const space = '**********'
    
// console.log(numberArr);

    const morseArr = []
    for( let i = 0; i < tenStr.length; i++){
        morseArr.push(tenStr[i].replaceAll('10', '.').replaceAll('11', '-').replaceAll(' ', space).replaceAll('0', ' ').trim()) 
    }
 

    const keysArr = Object.keys(MORSE_TABLE);
    const valuesArr = Object.values(MORSE_TABLE);


//     for( let i = 0; i <= morseArr.length; i++){
//         // if (morseArr[i] === space){ 
//         //     letterArr.push(' ')
//         // } else 
//         if (morseArr[i] !== space){
//             for( let j = 0; j <= morseArr.length; j++){

//             if (morseArr[i] === keysArr[j]){
//                 letterArr.push(valuesArr[j])
//             }
//         } 
//     } else { letterArr.push(' ')}
// }

const letterArr = []
morseArr.forEach(function (el) {
 if (el === space){
    letterArr.push(' ')
 }
 for (let i = 0; i <= keysArr.length; i++){
    if (el === keysArr[i]){
        letterArr.push(valuesArr[i])
    } 
 }
})

return letterArr.join('')
}

module.exports = {
    decode
}