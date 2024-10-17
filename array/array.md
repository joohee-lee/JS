# Array 
구분|객체|배열|
|------|---|---|
|구조|프로퍼티 키:값|인덱스 index와 요소 element|
|값의 참조|프로퍼티 키| index|
|값의 순서|x|O|
|length 프로퍼티|x|O|

- 객체(object)와 배열(Array)를 구분하는 가장 명확한 차이는 값의 index(순서)와 length property(프로퍼티) 
- 인덱스로 표현되는 값의 순서와, length 프로퍼티를 갖는 배열은 반복문(for)문을 통해 순차적으로 값에 접근하기 적합한 자료구조.


## 1. Array  생성 
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

## 2. Array  요소 참조

```
  요소참조할때, [인덱스]

  const arr = [1, 2];

  console.log(arr[0]);

```

## 3. Array  요소 추가와 갱신
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
## 5. Array 매서드()  - builtin 메서드
- Array.isArray()
- Array.prototype.indexOf
- Array.prototype.push
- Array.prototype.pop
- Array.prototype.unshift
- Array.prototype.shift
- Array.prototype.concat
- Array.prototype.splice
- Array.prototype.slice
- Array.prototype.join
- Array.prototype.reverse
- Array.prototype.fill
- Array.prototype.include
- Array.prototype.flat

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





