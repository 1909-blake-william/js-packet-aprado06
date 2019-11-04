// Javascript Homework
// Due next Friday Morning
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.

function fib(n) {
    let a = 1;
    let b = 0;
    let temp = 0;

    while (n >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }
    return b;
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

function bubbleSort(numArray) {
    for (let i = 0; i < numArray.length; i++) {
        for (let j = 1; j < numArray.length - 1; j++) {
            let a = numArray[i];
            let b = numArray[j];
            if (a > b) {
                numArray[i] = b;
                numArray[j] = a;
            }
        }
    }
    return numArray;
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr) {
    let output = "";
    for (let index = someStr.length; index >= 0; index--) {
        output = output.concat(someStr.charAt(index));
    }
    return output;
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum) {
    if (someNum <= 0) {
        return 0;
    } else if (someNum == 1) {
        return 1;
    } else {
        return someNum * factorial(someNum - 1);
    }
}


// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function substring(someStr, length, offset) {
    if (typeof (someStr) != "string") {
        alert("Please put a string as the first parameter");
    }
    if (typeof (length) != "number" || length < 0) {
        alert("Please put a positive number in the length parameter");
    }
    if (typeof (offset) != "number" || offset > someStr.length) {
        alert("Please put a number that is less than the legnth of the string in the offset parameter");
    }
    let start = offset;
    let end = offset + length;
    let output = "";
    for (let i = start; i <= end; i++) {
        output = output.concat(someStr.charAt(i));
    }
    return output;
}

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum) {
    let t = "";
    t = t.concat(someNum);
    let e = t.charAt(t.length - 1);
    if (e == 1 || e == 3 || e == 5 || e == 7 || e == 9) {
        return false;
    } else {
        return true;
    }
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

function isPalindrome(someStr) {
    let one = "";
    let two = "";
    if (isEven(someStr.length) == true) {
        let half = someStr.length / 2;
        for (let index = 0; index < half; index++) {
            one = one.concat(someStr.charAt(index));
        }
        for (let index = someStr.length - 1; index >= half; index--) {
            two = two.concat(someStr.charAt(index));
        }
    } else {
        let half = Math.floor(someStr.length / 2);
        for (let index = 0; index < half+1; index++) {
            one = one.concat(someStr.charAt(index));    
        }
        for (let index = someStr.length-1; index >= half; index--) {
            two = two.concat(someStr.charAt(index));
        }
    }
    if (one === two) {
        return true;
    } else {
        return false;
    }
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *


// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.


// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);


// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);

