$(document).ready(init);

function init(e) {
	$(".message").hide();
	$('#loginButton').on('click', function(e){
		toggleMessage(validate($('#username').val(), $('#password').val()));
	});
}

function validate(username, password){
	
	if(username && username==='system' && password && password==='manager') {
		return true;
	}
	return false;

}

function toggleMessage(isValid) {
	if(isValid===true) {
		$(".message").removeClass('failure').addClass('success').fadeIn('fast').find('span').text('Login Successful!');
	}
	else {
		$(".message").removeClass('success').addClass('failure').fadeIn('fast').find('span').text('Login Failed!!');
	}

	setTimeout(function(){
		$(".message").fadeOut('slow');
	}, 3000);
}