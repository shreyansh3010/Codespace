
 $(document).ready(function(){
 $(".owl-carousel").owlCarousel({
 loop:true,
 autoplay:true,
 autoplayTimeout:3000,
 autoplayHoverPause:false,
 items: 1,
 dots: true,
 nav: false
 });
 });
 

$('#img1').hover(function () {
    $('#head1').css('color', '#0093fc');
},
function () {
    $('#head1').css('color', '#CED1D2');
});
$('#img2').hover(function () {
    $('#head2').css('color', '#0093fc');
},
function () {
    $('#head2').css('color', '#CED1D2');
});

//Validation

$('#Checkbox_pay').click(function () {
	$('#reg_no_pay').attr('disabled', !this.checked)
	$('#uni_name_pay').attr('disabled', this.checked)
});

function pay(name_pay, email_pay, Checkbox_pay, reg_no_pay, uni_name_pay) {
	var name = document.getElementById(name_pay).value;
	var email = document.getElementById(email_pay).value;
	var check = document.getElementById(Checkbox_pay);
	var reg_no = document.getElementById(reg_no_pay).value;
	var uni_name = document.getElementById(uni_name_pay).value;
	var el_name = document.getElementById("error_name_pay");
	var el_email = document.getElementById("error_email_pay");
	var el_reg = document.getElementById("error_reg_pay");
	var el_uni = document.getElementById("error_uni_pay");
	function name_check() {
		if (name.length === 0) {
			el_name.classList.remove("error");
			
		}
		else {
			el_name.classList.add("error");
		
		}
	}

	function email_check() {
		if (email.search(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) == -1) {
			el_email.classList.remove("error");
			
		}
		else {
			el_email.classList.add("error");
			
		}
	}

	function check_checkbox() {
		if (check.checked === true) {
			el_uni.classList.add("error");
			document.getElementById(uni_name_pay).value = "";
			if (reg_no.search(/^[1-9]{1}[0-9]{1}[A-Za-z]{3}[0-9]{4}$/i) == -1) {
				el_reg.classList.remove("error");
				
			}
			else {
				el_reg.classList.add("error");
				
			}
		}
		else {
			el_reg.classList.add("error");
			document.getElementById(reg_no_pay).value = "";
			if (uni_name.length === 0) {
				el_uni.classList.remove("error");
				
			}
			else {
				el_uni.classList.add("error");
				
			}
		}
	}
	
	name_check();
	email_check();
	check_checkbox();
	
	
}


function contact(name, email, message) {
	var name = document.getElementById(name).value;
	var email = document.getElementById(email).value;
	var message = document.getElementById(message).value;
	var el_name = document.getElementById("error_name_contact");
	var el_email = document.getElementById("error_email_contact");
	var el_message = document.getElementById("error_text_contact");

	function name_check() {
		if (name.length === 0) {
			el_name.classList.remove("error");
		}
		else {
			el_name.classList.add("error");
		}
	}

	function email_check() {
		if (email.search(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) == -1) {
			el_email.classList.remove("error");
		}
		else {
			el_email.classList.add("error");
		}
	}

	function message_check() {
		if (message.length === 0) {
			el_message.classList.remove("error");
		}
		else {
			el_message.classList.add("error");
		}
	}

	name_check();
	email_check();
	message_check();
}