var banner = document.getElementsByClassName('banner')[0];
var img = banner.getElementsByTagName('img');
var i = 0;

function slide(){
	i++;
	if(i>img.length-1){
            i=0;
    }
	for(var j=0;j<img.length;j++){
		img[j].className = '';
	}
	var imgArr = img[i].className.split(' ');
	imgArr.push('imgActive');
	img[i].className = imgArr.join(' ');
}

setInterval(slide,3000);
