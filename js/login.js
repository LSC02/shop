<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>基本选择器</title>
		<script type="text/javascript" src="../../js/jQuery3.5.0.js"></script>
		<script type="text/javascript">
			function fun1 () {
				
				var $obj= $("#one");
				$obj.css("background-color","yellow")
				
			}
			function fun2 () {
				
				var $obj= $(".two");
				$obj.css("background-color","red")
				
			}
			function fun3 () {
				
				var $obj= $("div");
				$obj.css("background-color","blue")
				
			}
			function fun4 () {
				
				var $obj= $("*");
				$obj.css("background-color","pink")
				
			}
			function fun5 () {
				
				var $obj= $("#one,span");
				$obj.css("background-color","pink")
				
			}
			
			
		</script>
		
		<style type="text/css">
			div{
				background: gray;
				width: 200px;
				height: 100px;
				
				
			}
			
			
		</style>
	</head>
	<body>
		<div id="one" class="two"></div><br>
		<div class="two"></div><br>
		<div></div><br>
		<span>我是span标签</span><br>
		input type="button" id="btn01" value="选择id为one的元素" onclick="fun1()"/>
		<i<nput type="button" id="btn02" value="选择class为two的元素" onclick="fun2()"/>
		
		<input type="button" id="btn03" value="选择所有div元素" onclick="fun3()"/>
		<input type="button" id="btn04" value="选择所有元素" onclick="fun4()"/>
		<input type="button" id="btn05" value="选择id为one和所有span元素" onclick="fun5()"/>
	</body>
</html>
