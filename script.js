//Problem no 01
//var userInput = +prompt("Please enter a Number?")
//for (var i = 0; i < 10; i++)
    //console.log(`${userInput} * ${i} = ${userInput * i}`)
//Problem n0 02
//var mainArray = [];
//var sum = 0;
//for (var i = 0; i < 5; i++){
    //var userInput = +prompt("Please enter Elements to the Array")
    //mainArray.push(userInput)
//}
//for (let i = 0; i < mainArray.length; i++){
  //  sum += mainArray[i];
//}


//console.log(`The summ of the Array elements are: ${sum}`);
//Problem no 03
//var mainArray = []
//for (var i = 0; i < 5; i++) {
    //var userInput = +prompt("Please enter elements to the Array");
    //mainArray.push(userInput);
    //console.log(mainArray[i]);
//}
//let largerNum = mainArray[0];
//for (let i = 0; i < mainArray.length; i++) {
    //if (mainArray[i] > largerNum) {
        //largerNum = mainArray[i];
    //}
//}
//console.log(`The Largest Number in this Array is: ${largerNum}`)

//Problem no 04
    //var userInput = prompt("Please enter a string?")
    //var reverse = "";
    //for (let i = userInput.length - 1; i >= 0; i--){
        //reverse += userInput[i];
    //}
    //console.log(`The Reverse String is: ${reverse}`)

    //Problem no 05
    var userInput = +prompt("Please enter a Number?")
    var factorial = 1;
    for (let i = 2; i <= userInput; i++) {
        factorial *= i;
    }
    console.log(`The Factorial is:${factorial}`)

