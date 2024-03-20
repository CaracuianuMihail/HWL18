// De creat o functie care primeste un array de cifre si ASC sau DSC //
// daca primeste ASC va sorta lista crescator si vice versa daca va primi DSC, //
// de verificat ca lista primita are doar cifre, daca nu de returnat un mesaj "va rog sa introduceti doar liste de cifre". //
    function sortNumbers(array, sequence) {
    if (!array.every(number => typeof number === 'number' && number >= 0 && number <= 100)) {
        return "Vă rugăm să introduceți doar liste de cifre.";
    }

    if (sequence === "ASC") {
        return array.slice().sort((a, b) => a - b);
    } else if (sequence === "DSC") {
        return array.slice().sort((a, b) => b - a);
    } else {
        return "Ordinea specificată nu este validă. Vă rugăm să utilizați 'ASC' sau 'DSC'.";
    }
    }
    const ArrOfNumbers = [ 59.3, 3.05, 23, 1.0001, 8.96];
    console.log(sortNumbers(ArrOfNumbers, "ASC")); 
    console.log(sortNumbers(ArrOfNumbers, "DSC")); 

    //const invalidList = [ 59.3, 3.05, 23, 'a', 8.96];
    //console.log(sortNumbers(invalidList, "ASC")); 

// De creat o functie care primeste o listra si un element, functia trebuie sa intoarva indexul acelui element, daca elementul nu este gasit trebuie sa intoarca messaj "not found". //
    function searchIndex (list, element){ 
        const index = list.indexOf(element);
        if (index !== -1){
            return index;
        } else {
            return "Index Not Found!"
        }
    }
    const list = [ 2, 3, 4, 6, 9, 20, 26];
    console.log("\nIndex-ul cautat este:", searchIndex(list, 20));
    console.log("Index-ul neexistent cautat este:", searchIndex(list, 23));

// De creat o functie care va primi un array si va intoarce elementele radacina carora este un numar intreg, ex: [4, 9, 121, 144]. //
    function intSquareRoot (arr){
        return arr.filter(num => Number.isInteger(Math.sqrt(num)));
    }
    const arr = [ 4, 9, 13, 16, 20, 21, 36, 39];
    console.log("\nElementele radacina carora este un numar intreg:", intSquareRoot(arr),"\n");

// De creat o functie care primeste o lista de cifre dar va intoarce 2 liste, una cu elemente pare alta cu impare, verificati ca lista are doar cifre. //
function EvenAndOddNumbers(arrOfNum){
    if (!arrOfNum.every(numb => typeof numb === 'number' && Number.isInteger(numb) && numb >= 0 && numb <= 100)) {
        return "Vă rugăm să introduceți doar liste de cifre.";
    }
    const Even = arrOfNum.filter( numb => numb % 2 === 0);
    const Odd = arrOfNum.filter( numb => numb % 2 !== 0);
    return {Even, Odd}; 
}
const arrOfNum = [4, 9, 13, 16, 20, 21, 36, 39];
console.log(EvenAndOddNumbers(arrOfNum));

