console.log(typeof 123);
console.log(typeof 12e3);
console.log(typeof 0/0);
console.log(typeof value);

/*
number
number
NaN
undefined
*/

var sports ='축구 : ',
    player = '11명';

console.log(sports + player);

/*
축구 : 11명
*/

var player = 11,
    sports = '축구:';

console.log(sports + player);
console.log('A' + 1 + 2);
console.log(1 + 2 + 'A');
console.log(1 + 2 + 'A' + 3 + 4);

/*
숫자와 문자열 더하기
축구:11
A12
3A
3A34
*/

{ book : 'javascript', sprots: 'soccer'};

/* object = { key : value } */

var value = true;
console.log( value );
console.log( typeof value );

console.log( true + 2 );
console.log( 'A' + false );


/*
boolean 타입
true (숫자에서 사용하면 1 로 변환, 문자열에서는 true 는 값이 있고)/
false (숫자에서 사용하면, 0 으로 변환, , 문자열에서는 false 는 값이 없음.)

true
boolean
3
Afalse
*/

/*
javascript 에서는 undefined  도 값이며, 데이터 타입.
*/

var sports;
console.log(sports);
console.log(undefined);
console.log(typeof undefined);

console.log(undefined + 1);
console.log(2 + undefined);
console.log('A' + undefined);
sports ? console.log('값 있음') : console.log('값없음');

/*

undefined
undefined
undefined
NaN
NaN
Aundefined
값없음

*/

/*
null type
*/

console.log(null);
console.log(typeof null);

console.log(null + 1);
console.log(2 + null);
console.log('A' + null);

/*

null
object
1
2
Anull

*/











