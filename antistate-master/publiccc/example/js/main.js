var colorframe = 3;
var rainbows = document.getElementsByClassName('rbtext');
window.onload = function(){ 
    setInterval(function(){
		for (var i = 0; i < rainbows.length; i++) {
			rainbows[i].style.color = `hsl(${colorframe * 2 % 360},100%,50%)`;
			console.log(rainbows[i].style.color);
		}
		colorframe++;
	}, 10);
}
