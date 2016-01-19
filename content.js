function suggest(text) {
	//make XMLhttpreq and set tone into key
	
	var HTTPrequest = //url here
    var req = new XMLHttpRequest();
    //prbly post request tbh
    req.open("GET", HTTPrequest, true);
    req.onreadystatechange = function processData() {
        if (req.readyState == 4) {
            res = JSON.parse(req.responseText);
            callback(tone);
        }
    }
    req.send();

	var key = "happy";
	findEmoji(key);
}

var text = null;


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == "req") {
      console.log('test sent');
      sendResponse({type: "test"});
      text = request.text;
    }
});

console.log("I got the text here it is: " + text);

//suggest the thing to the user


