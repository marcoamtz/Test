!function () {
    'use strict';
    console.log('Test 1');
    console.log(propelics.test.fizzbuzz());
    console.log('----------------------------------------------');
    console.log('Test 2');
    console.log(propelics.test.countVowels('foobar'));
    console.log('----------------------------------------------');
    console.log('Test 3');
    console.log(propelics.test.minDifference(new Date(2011, 0, 1), new Date(2011, 0 , 2)));
    console.log('----------------------------------------------');
    console.log('Test 4');
    var obj = {
        e: true,
        a: 'foo',
        i: undefined,
        c: 0,
        h: null,
        b: 'bar',
        f: false,
        j: undefined,
        d: 1,
        g: null
    };
    console.log(propelics.test.groupValueType(obj));
    console.log('----------------------------------------------');
    console.log('Test 5');
    var str = '2*2*2';
    console.log(propelics.test.calculator(str));
    console.log('----------------------------------------------');
    console.log('Test 6');
    var matrix = [ [1, 2, 3], [4, 5, 6] ];
    console.log(propelics.test.arrTranspose(matrix));
    console.log('----------------------------------------------');
    console.log('Test 7');
    var s1 = 'abcdefgh';
    var s2 = 'fghijklm';
    console.log(propelics.test.compareStrings(s1,s2));
    console.log('----------------------------------------------');
    console.log('Test 8');
    console.log(typeof propelics.test.functionName());
    console.log('----------------------------------------------');
}();
