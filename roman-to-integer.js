let romanToInt = (s) => {
    const myMap ={
        'I':1,
        'V':5,
        'X':10,
        'L': 50,
        'C':100,
        'D':500,
        'M': 1000
    }

    let result = 0;
    for(let i = 0; i <s.length; i++){
        const current = myMap[s[i]]
        const next = myMap[s[i + 1]]

        if(current < next){
            result += next - current;
            i++
        }else{
            result += current;
        }
    }
   return result;

}


// Input from the user
let romanNumeral = prompt("Enter a Roman numeral:");
let integer = romanToInt(romanNumeral);
console.log("The integer value is: " + integer);