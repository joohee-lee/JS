# es6

## 기능별로 ES5 와 코드 비교 
<http://es6-features.org/>

## es6 새로운 기능들 

- Arrow Functions
- Classes
- Enhanced Object Literals
- Template Literals
- Destructuring (Pattern Matching)
- Default, Rest, Spread Parameters
- Let , Const
- Lterator, For-Of
- Generators
- Promises
- Modules
- Map, Set, WeakMap, WeakSet
- Symbols
- Math, Number, String, Array, OBject ApiS
- Proxy, Reflect
- 기타 

### Arrrow Functions
- Function expression 대체 
- 오른쪽이 expr 인 경우 해당 값 리턴 
- Block 인 경우 return 문 필요
- 바깥쪽의 this 를 그대로 사용

```
//es5 

odds = evens.map(function(v){ 
		return v+1;
	});
paris = evens.map(function(v){ 
		return {
			even:v, 
			odd: v+1;
		}

	});
nums = evens.map(function(v, i){ 
		return v+i;
	});


//es6

odds = evens.map( v => v+1 );
paris = evens.map( v => ({ even: v, odd: v+1}));
nums = evens.map( (v, i) => v+i);

```

- Function expression 대체
- 오른쪽이 expr 인 경우 해당 값 리턴 
- Block 인 경우 ㄱㄷ셔구 ans vlfdy 
- 바깥쪽의 this 를 그대로 사용 

```
//exprestion bodies
var odds = evens.map( v=>v+1);
var nums = evens.map((v, i) => v+i );
var paris = evens.map( v => ({ even: v, odd: v + 1}));


//statement bodies

nums.forEach( v => {
		if( v % 5 === 0)
			fives.push(v);
	});


//Lexical this

var bob = {

	_name : "bob",
	_friends : [],
	printFriends(){

		this._friends.forEach(

			this._friends.forEach(
				f => console.log(this._name + " knows" + f)
			);


		);
	}


}

```
```

var object = {
	f1: function(){
		console.log(this);

		var f2 = fucntion(){ console.log(this); }

		f2();

		setTimeout(f2, 1000);
	}
}


//결과 
object 
window
window

var object = {
	
	f1 : () => {

		console.log( this);
		var f2 = () => { console.log(this)}
		f2();
		setTomeout( f2, 1000 );

	}
}

//object1.f1();

```

### Classes

- 기존 Prototype 기반의  OO 의 sugar 
```

//es5
var Rectangle = function( id, x, y, width, height){

	Shape.call(this, id, x, y);
	this.width = width;
	this.height = height;

};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var Circle = function(id, x, y, radius){
	
	Shape.call(this, id, x, y);
	this.radius = radius;

};

Circle.prototype = bject.create(Shape.prototype);
Circle.prototype.constructor = Circle;

//es6

class Rectangle extends Shape{
	constructor( id, x, y, width, height){
		super(id, x, y){
			this.width = width;
			this.height = height;
		}
	}
}

class Circle extends Sahpe{
	constructor( id, x, y, radius){
		super( id, x, y);
		this.radius = radius;
	}
}


```
