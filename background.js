// var emojiMap = {
// 	"happy":[":)", ":-)", ";)"]
// 	"sad":"",
// 	"slightlyhorny":[";)", ""],
// 	"alexxuhorny":["<3", "luv<3"],
// 	"loveydovey" :[":*", ""]
// 	//whatever else
// }

// function findEmojis(keyword) {
// 	//return array of 3 possible emojis from emojiMap
// 	var temp = emojiMap.keyword;
// 	for(var i = 0; i < temp.length; i++) {
// 		console.log(temp[i]);
// 	}
// 	return temp;
// }


function getFBText() {
	return "HI GOT HERE";

}

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
     if (request.type == "hello") {
       text = request.text;
       alert(text);
     }

     if(request.greeting == "hello") {
     	alert("got the hello" + sender.tab.url);
                sendResponse({farewell: "test"});
     }
 });
 
