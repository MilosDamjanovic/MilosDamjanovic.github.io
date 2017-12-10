var forma = document.forms[0];

var Korisnik = function(ime, email) {
	this.ime = ime;
	this.email = email;
}

Korisnik.prototype.posaljiPoruku = function(poruka) {
	return "Korisnik " + this.ime + "  salje poruku sa email-a " + this.email + ". Tekst poruke: \n" + poruka;
};

function validiraj() {
	if (forma.ime.value=='') {
		alert("Niste uneli Vase ime!");
		document.forms[0].ime.focus();
		forma.ime.style.borderColor = 'red';
		return false;
	} else if (forma.ime.value.length < 3 || forma.ime.value.charAt(0) === forma.ime.value.charAt(0).toLowerCase()) {
		alert("Ime mora sadrzati bar 3 karaktera i poceti velikim slovom!");
		forma.ime.focus();
		forma.ime.style.borderColor = 'red';
		return false;
	} 
	forma.ime.style.borderColor = '';

	if(forma.email.value == '') {
		alert("Niste uneli Vasu email adresu!");
		forma.email.focus();
		forma.email.style.borderColor = 'red';
		return false;
	} else if(forma.email.value.indexOf('@') == -1) {
		alert("Email adresa mora sadrzati znak @!");
		forma.email.focus();
		forma.email.style.borderColor = 'red';
		return false;
	} 

	var array = forma.email.value.split("@");
	if(array[0] == "" || array[1] == "") {
		alert("Email adresa mora sadrzati karaktere i pre i posle @ znaka!")
		forma.email.focus();
		forma.email.style.borderColor = 'red';
		return false;
	}
	forma.email.style.borderColor = '';

	var radio = forma.ocena;
	var daLiImaCekiranih = false
	for (var i = 0; i < radio.length; i++) {
		if(radio[i].checked) {
			daLiImaCekiranih = true;
		}
	}

	if(!daLiImaCekiranih) {
		alert("Morate odabrati bar jednu ocena!");
		return false;
	}

	if(forma.poruka.value == '') {
		alert("Morate uneti poruku!");
		forma.poruka.focus();
		forma.poruka.style.borderColor = 'red';
		return false;
	}

	forma.poruka.style.borderColor = '';

	korisnik = new Korisnik(forma.ime.value, forma.email.value);
	confirm(korisnik.posaljiPoruku(forma.poruka.value));


}
