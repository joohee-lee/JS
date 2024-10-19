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