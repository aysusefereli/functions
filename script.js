let  number = prompt("Eded daxil edin.");
let a = parseInt(number)

function numberfunc() {
    let b =a**2
    console.log("Ededin kvadrati:" + b)
}
numberfunc()


function degreefunc(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log(degreefunc(20))


function reversenumber(n) {
    let l = n.toString()
    let m = l.split('').reverse().join('');
    return m;
}
console.log(reversenumber(123))
console.log(reversenumber(8790))


function countVowels(text) {
    const vowels = 'aıiuoüeə';
    let count = 0;
  
    for (let i = 0; i < text.length; i++) {
        let char = text[i]
        if (vowels.includes(char)) {
        count++;
       }
    }
    return count;
}
console.log(countVowels("salam"));


let num1 = prompt("Birinci ededi daxil edin.")
let num2 = prompt("Ikinci ededi daxil edin.")

let x = parseInt(num1)
let y = parseInt(num2)

function numbers() {
    let z = x + y
    console.log("Ededlerin cemi:" + z)
}
numbers()
  
