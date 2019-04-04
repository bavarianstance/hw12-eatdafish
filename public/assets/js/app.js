$(function(){
	$(".eatfish-form").on("submit", function(event){
		event.preventDefault();

	var fish_id = $(this).children(".fish_id").val();
	console.log(fish_id);

	$.ajax({
		method: "PUT",
		url: "/fish/" + fish_id 
	}).then(function(response){
		location.reload();
		});
	});
});