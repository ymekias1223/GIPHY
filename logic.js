var topics = ["Chocolate Rain", "Nyan Cat", "Doge","MLG","Bad Luck Brian" ]
var element_itterator = ["one","two","three","four","five","six","seven","eight","nine","ten"]

var load_buttons = function(){
	for(var i = 0;i<topics.length;i++){
		var default_buttons = $("<button>");
		
		default_buttons.attr("button-name",topics[i])
		default_buttons.text(topics[i]);
		$("#buttons").append(default_buttons);
	}
};

load_buttons();

	$("#buttons").on("click",function(){
		// for loop for itterating through all the div's assigning them each one gif
		for (var i=0;i<10;i++)
			// make ajax call
			var topic = $("button-name").val();
	      	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	        topic + "&api_key=dc6zaTOxFJmzC&limit=10";

	      	$.ajax({
	          url: queryURL,
	          method: "GET"
	        })
	        .done(function(response){
	        	console.log(response);
	        	var search_results = response.data;
	        	for (var i=0;i< element_itterator.length;i++)

	        		$(`.${element_itterator[i]}`).html("<img src="
	        		$(`.${element_itterator[i]}`).append(search_results)
	        })
	});
	$("#search").on("click", function(){
		console.log("got in")
		var search_element = $("#form").val();
		var new_button = $("<button>");
		new_button.attr("button-name",search_element)
		new_button.text(search_element);

		$("#buttons").append(new_button);

	});

