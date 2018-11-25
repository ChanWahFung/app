var spans = document.querySelectorAll('.but-list .but');
var boxs = document.querySelectorAll('.box-list .box');

for(var i=0;i<spans.length;i++){
	spans[i].index = i;
}

for(var i=0;i<spans.length;i++){
	spans[i].onclick = function(){
		
		//初始化
		for(var i=0;i<spans.length;i++){
			spans[i].className = 'col-xs-2 mar but';
			boxs[i].className = 'box';
		}
		
		//增加类名改变span样式
		var spansClassName = this.className.split(' ');
		spansClassName.push('active');
		this.className = spansClassName.join(' ');
		
		//增加类名改变div样式
		var boxsClassName = boxs[this.index].className.split(' ');
		boxsClassName.push('active');
		boxs[this.index].className = boxsClassName.join(' ');
	}	
}