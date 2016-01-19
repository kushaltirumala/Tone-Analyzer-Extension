var clicked = false;

document.getElementById("iamsslider").addEventListener('click', function(){
	clicked = document.getElementById("iamsslider").checked;
});







if(clicked) {
	//get most recent fb message store it in msg
	var msg = null;
	suggest(msg);
}
