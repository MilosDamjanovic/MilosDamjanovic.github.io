//fakultet
function punjac() {
	var load = document.getElementsByClassName("loader");
	var width = 1;
	var id = setInterval(frame, 80);
	function frame() {
		for (var i = 0; i < load.length; i++) {
			if(width<100){
				width++;
				load[i].style.width = width + '%';	
				document.getElementById("label-f").innerHTML=width*1 + '%';
				document.getElementById("label-m").innerHTML=width/10 + '%';		
			}
		}
	}
}
//sredja skola
function punjacTreca(){
	var load=document.getElementById("loaderTreca");
	var width = 1;
	var id = setInterval(frame,70);

	function frame(){
		if(width>99){
			clearInterval(id);
		}else{
			width++;
			load.style.width = width + '%';
			document.getElementById("label-treca").innerHTML=width*1 + '%';
		}
	}
}/*
function hover(){
	var hover1=document.getElementById("summary");
	hover1.style.backgroundImage = "url('img/gray.jpg')";
	hover1.style.fontFamily="Verdana";
}
*/