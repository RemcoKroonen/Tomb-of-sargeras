document.getElementById('option1').innerHTML = 'Level1';
document.getElementById('level_title').innerHTML = 'Start';
document.getElementById('option2').innerHTML= 'uitleg';
document.getElementById('option3').style.visibility = 'hidden';
document.getElementById('option3').innerHTML = 'Level2';
console.log(document.getElementById('option2').onclick);

var HasArcaneBindings = false;

function Level1() {
	console.log("Level1()");
	document.getElementById('option3').style.visibility = 'visible';
	document.getElementById('level_title').innerHTML = 'Level 1: De broken shore';
	document.getElementById('option1').innerHTML = 'Ga richting de tomb of Sargeras';
	document.getElementById('option2').innerHTML = 'Kijk rond op de broken shore';
	console.log(document.getElementById('option2').onclick);
	document.body.style.backgroundImage = "url('img/screenshot2.jpg')";

	var tekst = document.getElementById('tekst')
	tekst.innerHTML = 'Het is je gelukt Guldan te volgen tot de broken shore maar toen ben je zijn spoor kwijt geraakt';

	document.getElementById('option3').innerHTML = 'Ga naar de toren van de wardens';
	document.getElementById('option2').style.visibility = 'visible';
	option3.setAttribute("onClick", "javascript:Level2();");
	option2.setAttribute("onClick", "javascript:level7();");
	option1.setAttribute("onClick", "javascript:level8();");

	document.getElementById('tomb').pause();
	document.getElementById('broken shore').play();
	document.getElementById('Nightsong').pause();
	
	
}

function Level2() {
	console.log("Level2()");
	document.getElementById('level_title').innerHTML = 'Level 2: the wardens and the archmage';
	document.body.style.backgroundImage = "url('img/warden tower.jpg')";
	document.getElementById('option2').style.visibility = 'visible';
	document.getElementById('option1').innerHTML = 'Kijk rond';
	document.getElementById('option2').innerHTML = 'Praat met de wardens';
	document.getElementById('option3').innerHTML = 'Kijk in de toren ';
	option2.setAttribute("onClick", "javascript:Level3();");
	document.getElementById('tomb').pause();
	document.getElementById('broken shore').pause();
	document.getElementById('Nightsong').play();
	var tekst = document.getElementById('tekst')
	tekst.innerHTML = 'Je ziet in de verte een toren van de wardens staan. Als je in de buurt komt zie je ook een groep van Wardens staan.';

}

function Level3() {
	console.log("Level3()");
	document.getElementById('level_title').innerHTML = 'Level 3: Samenwerkenen?';
	document.body.style.backgroundImage = "url('img/Khadgar 1.jpg')";
	document.getElementById('option1').innerHTML = 'Vraag of de wardens Guldan gezien hebben';
	document.getElementById('option2').innerHTML = 'Vraag hulp aan de wardens';
	document.getElementById('option3').innerHTML = 'Zeg niks';
	option2.setAttribute("onClick", "javascript:Level4();");
	option3.setAttribute("onClick", "javascript:level6();");
	var tekst = document.getElementById('tekst')
	tekst.innerHTML = 'Misschien kunnen de wardens helpen met het zoeken naar Guldan? denk je.';
}

function Level4() {
	console.log("Level4())");
	document.getElementById('level_title').innerHTML = 'Level 4: Een plan';
	document.getElementById('option1').innerHTML = 'Vraag of de wardens het eiland gescout hebben';
	document.getElementById('option2').innerHTML = 'Vraag de leider(Maeiv Shadowsong) om hulp met het plan bedenken';
	document.getElementById('option3').innerHTML = 'Zeg niks';
	option1.setAttribute("onClick", "javascript:Level5();");
	option3.setAttribute("onClick", "javascript:level6();");
	option2.setAttribute("onClick", "javascript:level9();");
	var tekst = document.getElementById('tekst')
	tekst.innerHTML = 'Nu de Wardens tenmisten met je praten kan je misschien een plan gaan bedenken.';
}
function Level5() {
	console.log("Level5())");
	document.getElementById('level_title').innerHTML = 'Level 4: Scout report';
	var tekst = document.getElementById('tekst')
	tekst.innerHTML = 'De wardens hebben het brandde wrak van het schip gevonden en een paar dode nightfallen maar zij vinden het geen teken dat Guldan hier is.';
	/*alert("Praat weer met de wardens");*/

	option2.setAttribute("onClick", "javascript:Level4();");
	document.getElementById('option2').innerHTML = 'praat weer met de wardens';
}
function level6() {
	console.log("game over()");
	document.getElementById('level_title').innerHTML = 'GAME OVER';
	var tekst = document.getElementById('tekst')
	tekst.innerHTML = 'Je zegt niks en de wardens verlaten je zonder iets te zeggen. Je bent niks te weten gekomen over guldan and kan hem niet vinden. druk op F5 om opnieuw te beginnen.';
	document.getElementById('option3').style.visibility = 'hidden';
	document.getElementById('option2').style.visibility = 'hidden';
	document.getElementById('option1').style.visibility = 'hidden';
}


function uitleg() {
	console.log("Uitleg)");
	document.getElementById('uitleg')
	document.getElementById('level_title').innerHTML = 'uitleg';
	document.body.style.backgroundImage = "url('img/uitleg.jpg')";
	console.log(document.getElementById('option2').onclick);
	document.getElementById('option2').style.visibility = 'hidden';}
	var tekst = document.getElementById('tekst')
	tekst.innerHTML = 'Je doel is om de kwade warlock Guldan te vinden en te verslaan om Azerot te redden. Jij(Archmage Khadgar) Moet spullen vinden, rond kijken en voor allies zoeken.';

function level7() {
	console.log("game over()");
	document.getElementById('level_title').innerHTML = 'GAME OVER';
	var tekst = document.getElementById('tekst')
	tekst.innerHTML = 'Je kijkt rond op de broken shore maar je kijkt niet goed uit en wordt aangevallen door verschillende monsters en sterft. druk op F5 om opnieuw te beginnen.';
	document.getElementById('option3').style.visibility = 'hidden';
	document.getElementById('option2').style.visibility = 'hidden';
	document.getElementById('option1').style.visibility = 'hidden';
}
function level8() {
	console.log("game over()");
	document.getElementById('level_title').innerHTML = 'GAME OVER';
	var tekst = document.getElementById('tekst')
	tekst.innerHTML = 'Je checkt of de tomb of sargeras nog steeds dicht is maar je verspilde je tijd daar en guldan is ontsnapt.';
	document.getElementById('option3').style.visibility = 'hidden';
	document.getElementById('option2').style.visibility = 'hidden';
	document.getElementById('option1').style.visibility = 'hidden';
	document.body.style.backgroundImage = "url('img/tomb of sargeras 3.jpg')";

}

function level9() {
	console.log("level9()");
	document.getElementById('level_title').innerHTML = 'Level 5: Wat nu?';
	document.getElementById('option1').innerHTML = 'Vraag of de wardens het eiland gescout hebben';
	document.getElementById('option2').innerHTML = 'Vraag Maeiv Shadowsong(de leider) of hier nog iets gebeurt is.';
	document.getElementById('option3').innerHTML = 'Zeg niks';
	option2.setAttribute("onClick", "javascript:level10();");

}
function level10() {
	console.log("level10()");
	document.getElementById('level_title').innerHTML = 'Level 6: geen hulp of nieuws';
	document.getElementById('option1').innerHTML = 'Probeer Maeiv Shadowsong te overtuigen om te helpen.';
	document.getElementById('option2').innerHTML = 'Volg de wardens naar hun basis';
	document.getElementById('option3').innerHTML = 'Ga naar het geluid toe';
	tekst.innerHTML = 'De wardens geven jouw de schuld dat jij Guldan nog niet gestopt hebt en gaan ervan uit dat hij hun basis gaat aanvallen. Ze staan dus op het punt van weg te gaan. Jij kreegt dus geen hulp. Je hoort ook een geluid van de tomb of sargeras komen.';
	option3.setAttribute("onClick", "javascript:level11();");
}
function level11() {
	console.log("level11()");
	document.getElementById('level_title').innerHTML = 'Level 7: the chase begins';
	document.getElementById('tomb').pause();
	document.getElementById('broken shore').pause();
	document.getElementById('Nightsong').pause();
	document.getElementById('chase').play();
	document.body.style.backgroundImage = "url('img/tombart2.jpg')";

}
function level12() {
	console.log("level12()");
	document.getElementById('level_title').innerHTML = 'Level 8: het padl';
	document.getElementById('tomb').pause();
	document.getElementById('broken shore').pause();
	document.getElementById('Nightsong').pause();
	document.getElementById('chase').play();
	document.body.style.backgroundImage = "url('img/tombart2.jpg')";
}
