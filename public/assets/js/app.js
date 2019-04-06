$(function(){
	// init submit listener via jquery
	$(".eatfish-form").on("submit", function(event){
		event.preventDefault();
	// def and capture fish id by name
	var fish_id = $(this).children("#fish_name").val();
	console.log(fish_id);
// AJAX PUT REQUEST TO UPDATE FISH BY ID
	$.ajax({
		method: "PUT",
		url: "/fish/" + fish_id 
	}).then(function(response){
		// refresh page
		location.reload();
		});
	});
});