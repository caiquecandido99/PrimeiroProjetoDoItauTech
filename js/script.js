function leiaMais1(){
	var pontos1=document.getElementById("pontos1");
	var maisTexto1= document.getElementById("mais1");
	var btnLeiaMais1= document.getElementById("btnLeiaMais1");

	if(pontos1.style.display === "none"){ 
		pontos1.style.display="inline";
		maisTexto1.style.display="none";
		btnLeiaMais1.innerHTML="Leia mais"
	}else{
		pontos1.style.display="none";
		maisTexto1.style.display="inline";
		btnLeiaMais1.innerHTML="Leia menos"
	}
}

function leiaMais2(){
	var pontos2=document.getElementById("pontos2");
	var maisTexto2= document.getElementById("mais2");
	var btnLeiaMais2= document.getElementById("btnLeiaMais2");

	if(pontos2.style.display === "none"){ 
		pontos2.style.display="inline";
		maisTexto2.style.display="none";
		btnLeiaMais2.innerHTML="Leia mais"
	}else{
		pontos2.style.display="none";
		maisTexto2.style.display="inline";
		btnLeiaMais2.innerHTML="Leia menos"
	}
}

function leiaMais3(){
	var pontos3=document.getElementById("pontos3");
	var maisTexto3= document.getElementById("mais3");
	var btnLeiaMais3= document.getElementById("btnLeiaMais3");

	if(pontos3.style.display === "none"){ 
		pontos3.style.display="inline";
		maisTexto3.style.display="none";
		btnLeiaMais3.innerHTML="Leia mais"
	}else{
		pontos3.style.display="none";
		maisTexto3.style.display="inline";
		btnLeiaMais3.innerHTML="Leia menos"
	}
}

function leiaMais4(){
	var pontos4=document.getElementById("pontos4");
	var maisTexto4= document.getElementById("mais4");
	var btnLeiaMais4= document.getElementById("btnLeiaMais4");

	if(pontos4.style.display === "none"){ 
		pontos4.style.display="inline";
		maisTexto4.style.display="none";
		btnLeiaMais4.innerHTML="Leia mais"
	}else{
		pontos4.style.display="none";
		maisTexto4.style.display="inline";
		btnLeiaMais4.innerHTML="Leia menos"
	}
}

function leiaMais5(){
	var pontos5=document.getElementById("pontos5");
	var maisTexto5= document.getElementById("mais5");
	var btnLeiaMais5= document.getElementById("btnLeiaMais5");

	if(pontos5.style.display === "none"){ 
		pontos5.style.display="inline";
		maisTexto5.style.display="none";
		btnLeiaMais5.innerHTML="Leia mais"
	}else{
		pontos5.style.display="none";
		maisTexto5.style.display="inline";
		btnLeiaMais5.innerHTML="Leia menos"
	}
}

function leiaMais6(){
	var pontos6=document.getElementById("pontos6");
	var maisTexto6= document.getElementById("mais6");
	var btnLeiaMais6= document.getElementById("btnLeiaMais6");

	if(pontos6.style.display === "none"){ 
		pontos6.style.display="inline";
		maisTexto6.style.display="none";
		btnLeiaMais6.innerHTML="Leia mais"
	}else{
		pontos6.style.display="none";
		maisTexto6.style.display="inline";
		btnLeiaMais6.innerHTML="Leia menos"
	}
}

function leiaMais7(){
	var pontos7=document.getElementById("pontos7");
	var maisTexto7= document.getElementById("mais7");
	var btnLeiaMais7= document.getElementById("btnLeiaMais7");

	if(pontos7.style.display === "none"){ 
		pontos7.style.display="inline";
		maisTexto7.style.display="none";
		btnLeiaMais7.innerHTML="Leia mais"
	}else{
		pontos7.style.display="none";
		maisTexto7.style.display="inline";
		btnLeiaMais7.innerHTML="Leia menos"
	}
}

function leiaMais8(){
	var pontos8=document.getElementById("pontos8");
	var maisTexto8= document.getElementById("mais8");
	var btnLeiaMais8= document.getElementById("btnLeiaMais8");

	if(pontos8.style.display === "none"){ 
		pontos8.style.display="inline";
		maisTexto8.style.display="none";
		btnLeiaMais8.innerHTML="Leia mais"
	}else{
		pontos8.style.display="none";
		maisTexto8.style.display="inline";
		btnLeiaMais8.innerHTML="Leia menos"
	}
}

// INICIO botão SUBIR
var mybutton = document.getElementById("subir");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// FIM botão SUBIR

// INICIO Formulário
const formularioDeContato = document.getElementById('contact-form')

formularioDeContato.addEventListener('submit', function(e){
    e.preventDefault()
    let nome = document.getElementById('nomeid').value;
    let fone = document.getElementById('foneid').value;
	let email = document.getElementById('emailid').value;
	let mensagem = document.getElementById('mensagemid').value;

fetch('https://webhook.site/c76c818e-41ac-4870-b0cb-d5da8940f4db', {
    method: 'POST',
    body: JSON.stringify({
	nomeid: nome,
	foneid: fone,
	emailid: email,
	mensagemid: mensagem
})
	}).then( response => {
		if (response.status === 200) {
			alert('Mensagem enviada');
			//	document.getElementById('contact-form').reset();
		} else {
			alert("ERROR");
		}
	})
})
// FIM Formulário
