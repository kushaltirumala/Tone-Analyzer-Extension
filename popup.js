var clicked = false;

document.getElementById("iamsslider").addEventListener('click', function(){
	clicked = document.getElementById("iamsslider").checked;
});


var emojiMap = {
	"happy":[":)", ":-)", ";)"],
	"sad":[":("],
	"slightlyhorny":[";)", ""],
	"alexxuhorny":["<3", "luv<3"]
	//whatever else
}

function findEmojis(keyword) {
	//return array of 3 possible emojis from emojiMap
	var temp = emojiMap.keyword;
	for(var i = 0; i < temp.length; i++) {
		console.log(temp[i]);
	}
	return temp;
}


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

