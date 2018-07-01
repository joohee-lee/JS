// Assignment Operator
// 할당 연산자를 치환 연산자, 대입연산자

var sports = 'swim';
var value = 1 + 2 ;
var aa = bb = cc = 1;
var plus = 5;
plus += 3;


console.log(1+2);
console.log('123' + '500');
console.log(123 + '500');
console.log('123' + '');
console.log( typeof value);
console.log(10+20+'ABC');

console.log(10 + null); //10
console.log(10 + true); // 11
console.log(10 + false); //10
console.log(10 + undefined); // NaN

console.log(30-20); // 10
console.log('30'-20); // 10
console.log(30-'20'); // 10
console.log('70'-'20'-'10'); // 40


console.log(20*true); //20
console.log(20*false); // 0
console.log(20*null); // 0
console.log(Infinity * 0);  //NaN


console.log(2.3 * 3); //6.8999999999999995
console.log(2.3 * 10 * 3/10); // 6.9

console.log( 3 / 'A'); //NaN
console.log( 0 / 0);   //NaN
console.log( 0 / 25);  // 0
console.log( 3 / 0);  // Infinity

console.log( 12 / true);  //12
console.log( 12 / false;  //Infinity
console.log( 12 / null);  //Infinity


console.log( 3 % 2); //1


var two = -2;
console.log(+two);  // -2  // + 단항 연산자는 음수를 양수로 만들지 않음.


var seven = +'7';
console.log(typeof seven);  //  number // 단항 + 연산자가 문자열 "7" 을 숫자 7로 변환.

var five = 5 ;
console.log(-five);  // -5

 var six = -6;
console.log(-six);
 // - 연산자는 피연산자를 숫자타입으로 변환하고 부호를 바꿉니다.  - 이면 + / + 이면 -


// 후치 증가 연산자
var plus = 1;
console.log( 5 + plus ++);

plus = 2

var value = plus ++ + 1;

console.log(value);  // 3
console.log(plus);  // 3

value = 7
value++ ;  // 8 ( 후지 증가 연산자 ++ 는 ; 세미콜론 다음에 변숫값이 1 증가 )

console.log(value);


// 전치 증가 연산자 ++plus   - 먼저 값을 증가 시키고 연산
value = 7
++value ;

console.log(value); // 8

plus = 2

var value = ++plus + 5;
console.log(value); // 8

console.log(3 + ++plus);  // 6

//후치 감소 연산사  minus--

var minus = 3;
console.log( minus-- + 5);  // 8

// -- 후치 감소 연산자는 세미콜론 앞에서 변숫값을 감소시키지 않음

//전치 감소 연산자  - 연산을 수행하기 전에 1을 감소 시킨다.
console.log( --minus + 5);  // 7

//논리 NOT 연산자
// Logical NOT
// !value  true --> false , false -->true

 var value = true;

 console.log( !value);  // false
 console.log( !5);
 console.log(!!"A");  // true



// 비트 Not 연산자  ( Bitwise NOT Operator ) ~ 작성

// 피연산자가 값을 2진수 비트로 변환한후 비트 값을 반대호 반환
// 양후/음수 사인 부호가 바뀜
// 양수는 음수로  -1 을 더하고,  음수는 양수로 1을 뻄.

console.log(~0);  // -1
console.log(~~1); //0
 console.log(~5); // -6






























