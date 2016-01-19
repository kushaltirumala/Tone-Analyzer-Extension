var emojiMap = {
	"happy":[":)", ":-)", ";)"]
	"sad":"",
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


function getFBText() {

}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {type: "req", text:getFBText()}, function(response) {
    if(response.type == "test"){
      console.log('test received');
    }
  });
});
