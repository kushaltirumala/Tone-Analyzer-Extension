
// function suggest(text) {
// 	//make XMLhttpreq and set tone into key
	
// 	var HTTPrequest = //url here
//     var req = new XMLHttpRequest();
//     //prbly post request tbh
//     req.open("GET", HTTPrequest, true);
//     req.onreadystatechange = function processData() {
//         if (req.readyState == 4) {
//             res = JSON.parse(req.responseText);
//             callback(tone);
//         }
//     }
//     req.send();

// 	var key = "happy";
// 	//findEmoji(key);
// }

//alert('hi');




var text = null;


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   chrome.tabs.sendMessage(tabs[0].id, {type: "req", text:"yoyo"}, function(response) {
     if(response.type == "test"){
       alert('test received');
     }
   });
 });


//suggest the thing to the user


