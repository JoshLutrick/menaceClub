const multiply = n1 => {
    let myNum = n1;
    function giveAnswer(){
        return myNum * 5;
    }
    return giveAnswer
}

let multiplySeven = multiply(7);

console.log(multiplySeven());