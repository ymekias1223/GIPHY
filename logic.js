var topics = ["Chocolate Rain", "Nyan Cat", "Doge","MLG","Bad Luck Brian" ];
var element_itterator = ["one","two","three","four","five","six","seven","eight","nine","ten"];

var loadBtn =function(){
	console.log("loading Buttons......");

	 for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var newButton = $("<button>");
          // Adding a class
          newButton.hasClass("buttons");
          // Providing the button's text with a value of the movie at index i
          newButton.text(topics[i]);
          // Adding the button to the HTML
          $("#buttons").append(newButton);
        }
	// for(var i = 0;i<topics.length;i++){
	// 	var default_buttons = $('<button>');
	// 	var button_name = topics[i];
	// 	default_buttons.attr("button-name",button_name);
	// 	default_buttons.text(button_name);
	// 	default_buttons.hasClass("buttons");
	// 	$("#buttons").append(default_buttons);
	// }
}
loadBtn();


	$("#create_button").on("click",function(){
		var button_attr = $('#form').val();
		var new_button = $('<button>');
		new_button.text(button_attr);
		new_button.hasClass('buttons');
		$("#buttons").append(new_button);
});



	$(".buttons").on("click",function(event){
			console.log("clicked");
			$("#buttons").empty();
            var topic = $("#form").val();
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            topic + "&api_key=dc6zaTOxFJmzC&limit=10";
              $.ajax({
              url: queryURL,
              method: "GET"
            })
            .done(function(response){
                console.log(response);
                for (var i = 0; i < response.data.length; i++) {
                    var newImg = $('<img>');
                    newImg.addClass('gif');
                    newImg.attr('src', response.data[i].images.fixed_height.url);
                    $('.gifHolder'+i).prepend(newImg);
                }
            })
    });
