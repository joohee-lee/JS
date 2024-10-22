# Array 
구분|객체|배열|
|------|---|---|
|구조|프로퍼티 키:값|인덱스 index와 요소 element|
|값의 참조|프로퍼티 키| index|
|값의 순서|x|O|
|length 프로퍼티|x|O|

- 객체(object)와 배열(Array)를 구분하는 가장 명확한 차이는 값의 index(순서)와 length property(프로퍼티) 
- 인덱스로 표현되는 값의 순서와, length 프로퍼티를 갖는 배열은 반복문(for)문을 통해 순차적으로 값에 접근하기 적합한 자료구조.


## 1. Array  declaration(생성)
- 1.1 배열리터럴 
```
const arr = []
const arr = ['apple', 'banana', 'orange'];
const arr = [1, , 3] 희소 배열 

```
- 1.2 Array 생성자함수 
```
const arr = new Array(10);
const arr = new Array[1, 2, 3];
const arr = Array[1, 2, 3];

```

- 1.3 Array.of
```
const arr = Array.of(1); --> {1}
const arr = Array.of(1,2,3); --> {1,2,3}
const arr = Array.of('string'); --> {'string'}

```

- 1.4 Array.from 
```
const arr = Array.from({ length: 2, 0:'a', 1:'b' }); --> {'a','b'}
const arr = Array.from({length: 3}); --> {undefined, undefined, undefined}
const arr = Array.from({length: 3}, (_, i) => i); --> {'0, 1, 2'}

```

## 2. Array  요소 참조 .. index position.

```
  2.0 index position - 요소참조할때, [인덱스]

  const arr = [1, 2];

  console.log(arr.length);
  console,log(arr[arr.length-1]); 마지막 배열 접근  
  console.log(arr[0]);

  const fruits = ['사과', '귤', '바나나']

 2.1 Looping over an array - for

  for(let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
  }

  //사과, 귤, 바나나

2.2 for of
  for (let fruit of fruits) {
    console.log(fruit)
  } 
 //사과, 귤, 바나나

2.3 forEach

fruits.forEach(
    function (fruit, index) {
        console.log(fruit, index)
    }
)

//es6 한줄 일 경우 {} 필요없음. 
fruits.forEach((fruit, index) => console.log(fruit, index));
  
```

## 3. Array  요소 추가와 갱신 / addition, deletion, copy
```
const arr = [0];
arr[1] = 1;

console.log(arr);  //[0, 1]
console.log(arr.length) //2

```

## 4. Array  요소 삭제 
```
const arr = [1, 2, 3];

delete arr[1];  => 희소 배열로 됨,  추천하지 않음. 
console.log(arr);

; Array.prototype.splice 메서드 사용.


```
//배열 함수
## 5. Array 매서드()  - builtin 메서드
```
addition, deletion, copy
note! shift, unshift are slower than pop, push

```

- Array.isArray()

- Array.prototype.push

- Array.prototype.pop

- Array.prototype.unshift //느림 

- Array.prototype.shift //느림

- Array.prototype.concat
  combine two arrays. 

  const fruits1 = ['a', 'b', 'c'];
  const fruits2 = ['d', 'e', 'f'];

  fruits1.concat(fruits2);
  (6) ['a', 'b', 'c', 'd', 'e', 'f']

- Array.prototype.splice
  remove an item by index position
  fruits.splice(1, 1); 삭제될 요소 start position, delete 갯수 

- Array.prototype.slice
- Array.prototype.join
- Array.prototype.reverse
- Array.prototype.fill
- Array.prototype.flat

```
note!  searching find the index

```

- Array.prototype.indexOf
- Array.prototype.include

## 6. Array 고차 함수()
- Array.prototype.sort
- Array.prototype.foreach
- Array.prototype.map
- Array.prototype.filter
- Array.prototype.reduce
- Array.prototype.some
- Array.prototype.every
- Array.prototype.find
- Array.prototype.findIndex
- Array.prototype.flatMap 


# Looping over an array -  for loop , foreach, map 
```
//배열함수 

let names = [
    "Stevne paul", 
    "Bill Gate",
    "elon musk",
    "Jaff Bezos",
    "Warren Edwrd",
    "Larry Page",
    "Larry Elison",
    "Tim cook",
    "Lloyd Blankfein",
    "sony"
]

let names2 = [
    "김민제", 
    "손흥민",
    "이강인",
    "배준호",
    "오세훈",
    "오현규",
    "설영우",
    "이재성",
    "황희찬",
    "sony"
]

let ceoList = [
    {name: "손흥민", age: 32, ceo: false },
    {name: "tim cook", age: 55, ceo: true},
    {name: "Elon musk", age: 50, ceo: true}
]


//for loop
for (let i=0; i < names.length; i++) {
    console.log(names[i])
}


// function printName(item) {
//     console.log(item)
// }

//2. forEach  - 함수를 매개변수로 받는다. 
//names.forEach(printName) 

//3. 익명함수를 직접 매개변수로 
names.forEach(
    function (item, index) {
        console.log(item, index)
    }
)

//es6 문법으로 
names2.forEach(
    (item) => {console.log(item)}
)

//4.map  => 반환값이 있다, return !!  반드시 new array 가 반환.

let data = names2.map(
    (item) => {
        return item
    })

console.log(data)

//5. map sample // 원하는 데이터 가져오고 싶을때...

let data2 = ceoList.map(
    (item) => {
        //return  item.name;
        return  item.age;
    }
)

console.log( data2)

//6.filter: true , false 로 리턴 , 결과값은 배열로 리턴.
let data3 = ceoList.filter(
    (item) => {
        return  item.age == 55;
    }
)
console.log( data3)

//7. 첫글자가 오로 시작하는 
let data4 = names2.filter(
    (item) => {
        return item.startsWith("오");
    }
)
console.log( data4)

//8. some  : names2 에 오로 시잗하는 이름 있어? true : false  리턴
let data5 = names2.some((item) => {
        return item.startsWith("오");
    }
)

console.log( "some: ", data5) //true

//8. every  : names2 에 모두가  오로 시하는 이름 있어? true : false  리턴
let data6 = names2.every((item) => {
    return item.startsWith("오");
    }
)

console.log( "every: ", data6) //false

let data7 = names2.every((item) => {
    return item.length > 0
    }
)

console.log( "every: ",  data7) //true

//9. find // 첫번째로 찾은 하나만 반환 그래서 정확한 값 하나만 추출할떄가 편함.
let data8 = names2.find((item) => {
    //return item.startsWith("오");
    return item == "오현규";
    
    }
)

console.log( "find: ", data8) //false


//10.findindex
let data9 = names2.findIndex((item) => {
    //return item.startsWith("오");
    return item == "오현규";
    
    }
)

console.log( "findIndex: ", data9) //false

```


