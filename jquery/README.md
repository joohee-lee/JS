# jquery

- jQuery는 존 레식이 2006년에 발표한 크로스 플랫폼을 지원하는 경량의 자바스크립트 라이브러리이다. HTML 문서의 탐색이나 조작, 이벤트 핸들링, 애니메이션, Ajax등을 멀티 브라우저를 지원하는 API를 통해 더욱 간편하게 사용할 수 있다.

- jquery <http://jquery.com/>


##  jQuery 함수
```
	
	jquery()
	$()

```

## CSS 스타일의 selector를 인수로 전달받을 때
```

	jquery('h1');
	$('h1');
	$('h1').text();
	$('h1').text('hello!');

```

## JavaScript 객체를 인수로 전달받을 때

```
$('div.foo').click(function () {
  $(this).slideUp();
});

```

## 콜백함수를 인수로 전달받을 때
```
// 안전하게 DOM을 조작하기 위해서는 DOM이 완전히 로드된 후 자바스크립트가 실행되는 것이 바람직한데 이를 위해 이벤트 처리가 필요

jquery(document).ready(function(){

		//do something ..

});

$(document).ready(function(){
		
		//do something..

});


$(function(){

	//do something..
})

```

## selector

- jQuery는 CSS 스타일의 Selector를 이용하여 요소를 선택

### selector - 태그 / ID / Class 선택자

- 묵시적 반복(implicit iteration) - Query는 반복문 없이 해당하는 모든 요소에 접근/조작

```
	
	//javascript
	var targets = document.getElementsByTagName('li');
	for(var i = 0; i < targets.length; i++){
	  // text노드를 선택한 후, text를 변경
	  targets[i].firstChild.nodeValue = 'Orlando';
	}


	//jqeury 
	$(function(){
		
		console.log($('li'));
		$('li').text('orlando');
	});
	
	// Tag Selector
	$('li');

	// ID Selector
	$('#container');

	// Class Selector
	$('.articles');

```


### selector - Descendant Selector (후손 선택)
- 자신의 1 level 상위에 속하는 요소를 부모 요소, 1 level 하위에 속하는 요소를 자식 요소라고 한다. 자신보다 n level 하위에 속하는 요소는 후손 요소(하위 요소)라 한다. 후손 요소는 자손 요소를 포함하는 개념이다.

```

$(function () {
        $('#destinations .promo').text('Orlando');

        // var el = document.querySelectorAll('#destinations .promo');
        // for (var i = 0; i < el.length; i++) {
        //   el[i].textContent = 'Orlando';
        // }
});

```      

### selector - Child Selector(자식 셀렉터)

```

$(function () {
        $('#destinations > li').text('Orlando').css('color', 'red');

        // var el = document.querySelectorAll('#destinations > li');
        // for (var i = 0; i < el.length; i++) {
        //   el[i].textContent = 'Orlando';
        //   el[i].style.color = 'red';
        // }
});

```      

### selector - Pseudo-Class Selector (가상 클래스 선택자 )

```

$(function () {
        $('#destinations li:first').css('color', 'red');
        $('#destinations li:last').css('color', 'blue');
        // $('#destinations li:odd').css('color', 'orange');
        // $('#destinations li:even').css('color', 'purple');

        // var el = document.getElementById('destinations');
        // console.log(el.firstChild);
        // console.log(el.lastChild);

        // el.firstChild.style.color = 'red';
        // el.lastChild.style.color = 'blue';
});

```

### jqeury selector 
- <http://api.jquery.com/category/selectors/>

- Basics
	- *
	- .class
	-  element
	- #id
	- selecotr, selectorN, .. 

- Hierarchy
	- parent > child
	- ancestor descendant 
	- prev + next
	- prev ~ siblings


- Basic Filters

	- :animated
	- :eq()
	- :even
	- :first
	- :gt()
	- :header
	- :lang()
	- :last
	- :lt()
	- :not()
	- :odd
	- :root
	- :target

- Content Filters :

	-:contains()
	-:empty
	-:has()
	-:parent

- visibilty Filters:
	- :hidden
	- :visible 

- Attribute:
		








