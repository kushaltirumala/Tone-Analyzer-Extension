var emojiMap = {
	"happy":[":)", ":-)", ";)"]
	"sad":"",
	"slightlyhorny":[";)", ""],
	"alexxuhorny":["<3", "luv<3"],
	"loveydovey" :[":*", ""]
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


function getFBText() {
	return "HI GOT HERE";
}

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello") {
      alert("HI bryan chen");
      sendResponse({farewell: "goodbye"});
    }
  });
