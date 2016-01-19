var clicked = false;

document.getElementById("iamsslider").addEventListener('click', function(){
	clicked = document.getElementById("iamsslider").checked;
	document.getElementById("iamsslider").checked = true;
});


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {type: "hello"}, function(response) {
    alert(response.farewell);
  });
});
