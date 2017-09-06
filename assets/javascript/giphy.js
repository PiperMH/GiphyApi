//poppulates the div with the initial buttons
$(function(){
	populateButtons(searchArray,"searchButton","#buttonsArea");
	console.log("ahh yeah");
})

//The initial buttons within the Array
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
};

//
$(document).on("click",".searchButton", function(){
	$('#searches').empty();
	var type = $(this).data("type");
	console.log(type);
	//Giphy Url
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+type+"&api_key=f9807de676eb433e8a7b4d9a214a3041&limit=10";
	//Call to the Giphy URL
	$.ajax({
		url:queryURL,
		method:'GET'
	}).done(function(response){ //Once the call is done, function is run that establishes variables and fills them with data
			console.log(response);
			for(var i = 0; i < response.data.length; i++){
				var searchDiv = $("<div class='search-item'>");
				var rating = response.data[i].rating;
				var p = $("<p>").text("Rating: " + rating);//paragraph div that is eventually filled with image and rating
				var animated = response.data[i].images.fixed_height.url;
				var still = response.data[i].images.fixed_height_still.url;
				var image = $("<img>");
				image.attr('src',still);
				image.attr('data-still',still);
				image.attr('data-animated',animated);
				image.attr('data-state','still');
				image.addClass('searchImage');
				searchDiv.append(p);
				searchDiv.append(image);
				$("#searches").append(searchDiv);
				}
		})
})

//Function which changes the state(animated or still) of each image when clicked. 
$(document).on("click",".searchImage", function(){
	var state = $(this).attr("data-state");
	if(state == 'still'){
		$(this).attr("src", $(this).data('animated'));
		$(this).attr("data-state", "animated");
	}else{
		$(this).attr("src", $(this).data('still'));
		$(this).attr("data-state", "still");
	}
});


$("#addSearch").on("click",function(){
	var newSearch = $("input").eq(0).val();
	searchArray.push(newSearch);
	populateButtons(searchArray,"searchButton","#buttonsArea");
	return false; 
});


