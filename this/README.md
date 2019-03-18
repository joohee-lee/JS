# Javascript - this & 함수호출() &  new 함수호출 

## this
```

<script>
	function MyClass(){

		this.property1 = 'value1';
	}

	MyClass.prototype.method1 = function(){
		alert(this.property1);
	}

	var my1 = new MyClass();
	my1.method1();
</script>


```

- 일반함수에서 this 
- 중첩함수에서 this
- 이벤트에서 this
- 메서드에서 this 
- 메서드 내부의 중첩 함수에서 this

## 일반 함수에서의 this 
```
var dat =10;
	function outer(){
		this.data = 20;
		data= 30;

		console.log("1. data1 = "+data); // 30
		console.log("2. data2 = " +this.data) //30
		console.log("3. window.data =" +window.data) //30 
	}

outer();

---result

1. data1 = 30
2. data2 = 30
3. window.data =30

// 일반 함수 내부에서 this 는 모두 전역변수인  data(30)

```

## 중첩 함수에서의 this 
```
var data = 10
	function outer(){

		function inner(){
			this.data = 20;
			data = 30;

			console.log("1. data1 = "+data); // 30
			console.log("2. data2 = " +this.data) //30
			console.log("3. window.data =" +window.data) //30 
		}

		inner();
	}

	outer();

---result

1. data1 = 30
2. data2 = 30
3. window.data =30	

 중첩 함수 내부에서 this 는 전역변수인  data(30)
```

## 이벤트에서 this
```
var data=10;
	$('#myButton').click(function(){

		this.data = 20;
		data = 30;

		console.log("1. data1 = "+data); // 30
		console.log("2. data2 = " +this.data) //20
		console.log("3. window.data =" +window.data) //30 

	});

---result

  이벤트 리스너에서 this 는 이벤트를 발생시킨 객체가 된다. 
  this 는 #myButton 이 된다. 

1. data1 = 30
2. data2 = 20
3. window.data =30	

```

## 메서드 에서 this
```
    var data = 10;
	function MyClass(){
		this.data = 0;
	}

	MyClass.prototype.method1 = function(){
		this.data = 20;
		data = 30;

		console.log("1. data1 = "+data); 
		console.log("2. data2 = " +this.data) 
		console.log("3. window.data =" +window.data)  
	}

	// 인스턴스 생성 
	var my1 = new MyClass();
	my1.method1();

// 

---result
1. data1 = 30
2. data2 = 20
3. window.data =30
	
  메서드 에서 this 는 객체 자신이 저장됩니다. 
  이에 따라 2번의 data 는 객체의 프로퍼티가 되어 이곳에 20이 저장된다. 
  3번 data은  1번의  전역변수 data가 되어 이곳에 30이 저장.  
```


## 메서드 내부의 중첩 함수에 this
```
    var data = 10;
	
	function MyClass(){
		this.data = 0;
	}

	MyClass.prototype.method1 = function(){
		
		function inner(){
			this.data = 20;
			data = 30;

			console.log("1. data1 = "+data); 
			console.log("2. data2 = " +this.data) 
			console.log("3. window.data =" +window.data)  
		}
		
		inner();	
	}

	// 인스턴스 생성 
	var my1 = new MyClass();
	my1.method1();

// 	

---result

1. data1 = 30
2. data2 = 30
3. window.data =30

객체의 메서드 내부에 만들어지는 중첩 함수에서  this는 객체가 아닌 window가 된다. 

```


## 정리 

| this 가 만들어지는 경우 | this 값  |

| :--- | :---: |

| this 가 만들어지는 경우 | this 값  |
| 일반 함수에서 this | window 객체   |
| 중첩 함수에서 this | window 객체   |
| 이벤트에서 this | 이벤트를 발생시킨 객체 |
| 메서드 this | 메서드를 호출한 객체   |
| 메서드 내부의 중첩 함수에서 this | window 객체 |

 
## 함수호출 vs new 함수호출 

| 구분 | 함수이름() | new 함수이름() |
| :--- | :--- : | :---: |
| 해석  | 일반 함수 호출하는 구문  | new 클래스이름() 으로 해석, 특정 클래스의 인스턴스를 생성하는 구문 |
| this | window 객체   | 인스턴 |


```
var userName = "test";

	function User(name){
		this.userName = name;
	}

 	User('leejoohee');
 	console.log("userName : " + userName );  // leejoohee

vs

var userName = "test";

function User(name){
	this.userName = name;
}

var user = new User('leejoohee');
console.log("userName : " + userName ); //test 
console.log("userName : " + user.userName ) ;	//leejoohee
```
