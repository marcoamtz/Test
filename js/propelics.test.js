var propelics ={
    test: {
    //Test 1.
        fizzbuzz: function () {
            'use strict';
            for (var num = 1; num <= 200; num++) {
                console.log(
                    //apply the remainder to num with both 3 and 5 values
                    //if 0 is returned then set the string values accordingly
                    //if there is an empty string then sets the num value
                    (num % 3 ? '' : 'fizz') + (num % 5 ? '' : 'buzz') || num
                );
            }
        },
    //Test 2.
        countVowels: function (string) {
            'use strict';
            var count = 0;
            //the letter is assigned directly in the middle section
            //when the is no more letters in the string to assign it breaks the cicle
            for(var i = 0, char; (char = string[i]); i++) {
                    //if the character is a vowel adds 1 to count
                switch (char) {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                        count++;
                        break;
                }
            }
            return count;
        },
    //Test 3.
        minDifference: function (date1, date2) {
            'use strict';
            //get the milliseconds from the 2 dates and substracts the difference
            //then divides the difference between miliseconds * seconds
            //and return the minutes
            return (date2.getTime() - date1.getTime()) / 60000;
        },
    //Test 4.
        groupValueType: function (object) {
            var propType,
                propValue,
                arr = [{}, {}, {}];
            //iterate object
            for (var prop in object) {
                //validates that properties are not from prototype
                if (object.hasOwnProperty(prop)) {
                    propValue = object[prop];
                    propType = typeof propValue;
                    //checks the type of the value and stores it in his proper location
                    if (propType === 'string' || propType === 'number') {
                        arr[0][prop] = propValue;
                    } else if (propType === 'boolean') {
                        arr[1][prop] = propValue;
                    } else if (propValue === null) {
                        arr[2][prop] = propValue;
                    }

                }
            }
            return arr;
        },
    //Test 5.
        calculator: function (string) {
            'use strict';
            var operator,
                begin = 0,
                end = 0,
                result = 0,
                strLength = string.length,
                //function that makes the operation
                fnOperation = function () {
                    end = i;
                    var strNumber = string.slice(begin, end),
                        number = parseFloat(strNumber);
                    begin = end +1;
                    if (operator) {
                        result = operations[operator](result, number);
                    } else {
                        result += number;
                    }
                },
                //object with the operations
                operations = {
                    '+': function (x, y) { return x + y; },
                    '-': function (x, y) { return x - y; },
                    '*': function (x, y) { return x * y; },
                    '/': function (x, y) { return x / y; }
                };
            //checks if character is ann operation symbol
            //or is the last one in the string
            for (var i = 0, char; i <= strLength; i++) {
                char = string[i];
                if (char === '+') {
                    fnOperation();
                    operator = '+';
                } else if (char === '-') {
                    fnOperation();
                    operator = '-';
                } else if (char === '*') {
                    fnOperation();
                    operator = '*';
                } else if (char === '/') {
                    fnOperation();
                    operator = '/';
                }
                if (i === strLength) {
                    end = i;
                    var strNumber = string.slice(begin, end),
                        number = parseFloat(strNumber);
                    result = operations[operator](result, number);
                }
            }
            return result;
        },
    //Test 6.
        arrTranspose: function(matrix) {
            //get the matrix dimensions
            var outerLength = matrix.length || 0,
                innerLength = matrix[0].length || 0,
                newMatrix = [];

            //Validates if empty array
            if (!innerLength || !outerLength) {
                return [];
            }
            //loop the items in the inner array
            for(var i = 0; i < innerLength; i++) {
                //creates a new row for every item
                newMatrix[i] = [];
                //loop the items in the outer array
                for(var j = 0; j < outerLength; j++) {
                    //sets the values of the old array into the new one
                    newMatrix[i][j] = matrix[j][i];
                }
            }
            return newMatrix;
        },
    //Test 7.
        compareStrings: function (string1, string2) {
            var str1Length = string1.length,
                str2Length = string2.length,
                arrChars = [];
            for (var i = 0, char1; i < str1Length; i++){
                char1 = string1[i];
                for (var j = 0, char2; j < str2Length; j++) {
                    char2 = string2[j];
                    if (char1 === char2){
                        arrChars.push(char1);
                        break;
                    }
                }
            }
            return arrChars;
        },
    //Test 8.
        functionName: function () {
            //it returns a number
            return 0;
        },
    }
}


//Test 9.

//Function Expression example:
var paramTypeof1 = function (param) {
    return typeof param;
};

//Function Declaration example:
function paramTypeof2 (param) {
    return typeof param;
}

//Test 10.

/*I prefer to use function expressions in my code because function declarations are hoisted to the top of the scope
making them available in it entirely no matter where it was declared, that includes if statements where the function
declaration will be created whether the condition is true or not, and that includes any other block statement.*/
