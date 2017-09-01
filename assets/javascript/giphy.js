$(function(){
	populateButtons(searchArray, "searchButton", "#buttonsArea");
	console.log("ahh yeah");
})

var searchArray = ["Pig", "Cow", "Horse"];

function populateButtons(searchArray,classToAdd,areaToAddTo){
	$(areaToAddTo).empty();
	for(var i = 0; i < searchArray.length; i++){
		var b = $("<button>");
		b.addClass(classToAdd);
		b.attr("data-type",searchArray[i]);
		b.text(searchArray[i]);
		$(areaToAddTo).append(b);
	}
}

$(document).on("click", ".searchButton", function(){
	var type = $(this).data("type");
	//var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
})