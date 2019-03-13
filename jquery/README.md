# jquery

- jQuery는 존 레식이 2006년에 발표한 크로스 플랫폼을 지원하는 경량의 자바스크립트 라이브러리이다. HTML 문서의 탐색이나 조작, 이벤트 핸들링, 애니메이션, Ajax등을 멀티 브라우저를 지원하는 API를 통해 더욱 간편하게 사용할 수 있다.

- jquery <http://jquery.com/>

## jquery 버전 
```
jQuery 1.9+ 버전 : IE6, IE7, IE8 지원 
jQuery 2.0+ 버전 : 구버전의 브라우저를 지원하지 않는다. 
```


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
	- " * "
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

	- :contains()
	- :empty
	- :has()  / ex) $( "div:has(p)" ).addClass( "test" );
	- :parent

- visibilty Filters:
	- :hidden
	- :visible 

- Attribute:
	- [name|=”value”] / $( "a[hreflang|='en']" ).css( "border", "3px dotted green" );
	: 지정된 특성 값이 지정된 값과 일치하거나 지정된 값에 하이픈을(-) 덧붙힌 값으로 시작하는 요소들.
	- [name*=”value”] 지정된 특성 값이 지정된 특성 값을 포함하고 있는 요소들. 
	- [name~=”value”]
	- [name$=”value”]
	- [name=”value”] 지정된 특성 값이 지정된 값으로 끝나는 요소들. 
	- [name!=”value”] 지정된 특성 값이 지정된 값이 아닌 요소들. 
	- [name^=”value”] 지정된 특성 값이 지정된 값으로 시작하는 요소들. 
	- [name]
	- [name=”value”][name2=”value2”] 지정된 특성 중 하나를 가진 모든 요소들 


- Child Filters :

	- :first-child
	- :first-of-type
	- :last-child
	- :last-of-type
	- :nth-child(expr)
	- :nth-last-child()
	- :nth-last-of-type()
	- :nth-of-type()
	- :only-child
	- :only-of-type()


- Forms
	- :button
	- :checkbox
	- :checked
	- :disabled
	- :enabled
	- :focus
	- :file
	- :image
	- :input
	- :password
	- :radio
	- :reset
	- :selected
	- :submit
	- :text


### jqeury method

- 콘텐츠 필터 : 요소, 특성, 텍스트 노드의 콘텐츠를 가져오거나 수정한다. 

- 콘텐츠 가져오기/ 수정하기 
	- .html()
	- .text()
	- .replaceWidth()
	- .remove()


- 요소 
	- .before()
	- .after()
	- .prepend()
	- .append()
	- .remove()
	- .clone()
	- .unwrap()
	- .detach()
	- .empty()
	- .add()	

- 특성 
	- .attr()
	- .removeAttr()
	- .addClass()
	- .remvoeClass()
	- .css()

- 폼 값
	- .val()
	- .isNmeric()

- 요소탐색 
	- .find()
	- .closet()
	- .parent()
	- .parents()	
	- .children()
	- .siblings()
	- .next()
	- .nextAll()


- 필터 / 테스트 
	- .filter()
	- .not()
	- .has()
	- .is()
	- .contains()


- 객체집합 내 순서 평가 
	- .eq()
	- .lt()
	- .gt()


- 크기 / 위치 : 박스 형태로 요소의 크기나 위치를 가져오거나 수정한다. 
	- 크기 	
		- .height()
		- .width()
		- .innerHeight()
		- .outerHeight()
		- .outerWidth()
		- $(document).height()
		- $(document).width()
		- $(window).height()
		- $(window).width()


	- 위치 
		- .offset()
		- .position()
		- .scrolLseft()
		- .scrollTop()

- 효과 & 애니메이션 
				
	- 기본 
		- .show()
		- .hide()
		- .toggle()

	- 흐림 / 효과 
		- .fadeIn()
		- .fadeOut()
		- .fadeTo()
		- .fadeToggle()


	- 슬라이딩 효과 
		- .slideDown()
		- .slideUp()
		- .slideToggle()

	- 기타 
		- .delay()
		- .stop()
		- .animate()

- 이벤트 
	- 이벤트 리스너 생성 
	- .ready()
	- .load()

- 사용자	상호작용 
	- .on()
	- <http://api.jquery.com/on/>
```
ex1)
$(selector).on(eventType, function(){
	// ...something
});

$("pre").on("click", function(){
	o.toast.info("소스 코드를 클릭하셨군요!");
});


ex2)
function func1(){
	o.toast.error("func1");
};
function func2(){
	o.toast.warning("func2");
};
$("#test2").click(function(){
	$("pre").on("click", func1);
	$("pre").on("click", func2);
});

ex3)

<html>
	<body>
		<ul>
			<li>1...</li>
			...
			<li>1000...</li>
			<!-- 이런 li가 1000개! -->
		</ul>
	</body>
</html>

* bad
$("ul li").on("click", function(){
	// ...
});

* good
$("ul").on("click", "li", function(){
	// ...
}); 

```	


- 반복 Collection Manipulation
	- .each()
		Iterate over a jQuery object, executing a function for each matched element.
		ex) .each(function)