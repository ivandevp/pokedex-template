$(document).ready(function() {
	$.ajax({
		url: "pokemon.json"
	}).done(function(data) {
		console.log(data)
	})
})