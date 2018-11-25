var less = document.getElementsByClassName('less');

var more = document.getElementsByClassName('more');

var number = document.getElementsByClassName('number');

var price = document.getElementById('price');

var check = document.getElementsByClassName('check');

var all = document.getElementById('all');


//单选
for(var k=0;k<check.length;k++){
	
	check[k].onclick = function(){
		
		//判断类名数组长度
		if(this.classList.length<=1){
			
			var checkArr = this.className.split(' ');
			
			checkArr.push('active');
			
			this.className = checkArr.join(' ');
		
		}else{
			
			var checkArr = this.className.split(' ');
			
			checkArr.pop('active');
			
			this.className = checkArr.join(' ');
		}
	}
}

//全选
all.onclick = function(){
	
	//判断类名数组长度 增加类名
	if(all.classList<=0){
		
		var allArr = all.className.split(' ');
		
		allArr.push('active');
		
		all.className = allArr.join(' ');
		
		//遍历单选  达到全选中效果
		for(var k=0;k<check.length;k++){
			
			if(check[k].classList.length<=1){
				
				var checkArr = check[k].className.split(' ');
				
				checkArr.push('active');
				
				check[k].className = checkArr.join(' ');
			}
		}
	//删除类名
	}else{
		
		var allArr = all.className.split(' ');
		
		allArr.pop('active');
		
		all.className = allArr.join(' ');
		
		for(var k=0;k<check.length;k++){
			
			if(check[k].classList.length>1){
				
				var checkArr = check[k].className.split(' ');
				
				checkArr.pop('active');
				
				check[k].className = checkArr.join(' ');
			}
		}
	}
}

//减少
for(var i=0;i<less.length;i++){
	
	less[i].index = i;
	
	less[i].onclick = function(){
		
		number[this.index].value = Number(number[this.index].value)-1;
		
		
		if(Number(number[this.index].value)<=0){
			
			number[this.index].value=0;
		}
	}
}

//增加
for(var j=0;j<more.length;j++){
	
	more[j].index = j;
	
	more[j].onclick = function(){
		
		number[this.index].value = Number(number[this.index].value)+1;
		
		if(Number(number[this.index].value)>=20){
			
			number[this.index].value=20;
		}
	}
}

//合计
function money(){
	
	price.innerText = (Number(number[0].value)+Number(number[1].value)+Number(number[2].value)+Number(number[3].value)+Number(number[4].value)+Number(number[5].value))*100;
}

setInterval(money,300);
