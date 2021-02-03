setInterval(function(){
	const clock = document.querySelector(".display");
	let time = new Date();
	let min = time.getMinutes();
	let hr = time.getHours();
	let day = 'AM';
	if(hr > 12){
		day = 'PM';
		hr =  hr -12;
	}
	if(hr == 0){
		hr  = 12;
	}
	if(min < 10){
		min  = '0' + min;
	}
	clock.textContent = hr + ':' + min + " " + day;
});