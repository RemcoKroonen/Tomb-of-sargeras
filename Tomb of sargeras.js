document.getElementById('option1').innerHTML = 'Level1';
document.getElementById('level_title').innerHTML = 'Start';
document.getElementById('option2').innerHTML= 'uitleg';
document.getElementById('option3').style.visibility = 'hidden';
document.getElementById('option3').innerHTML = 'Level2';
console.log(document.getElementById('option2').onclick);

var HasArcaneBindings = false;
var option1 = document.getElementById('option1');
var option2	= document.getElementById('option2');
var option3 = document.getElementById('option3');
var teksteen = document.getElementById('teksteen');
var teksttwee =	document.getElementById('teksttwee');
var tekstdrie = document.getElementById('tekstdrie');

function Level1() {
	console.log("Level1()");
	option3.style.visibility = 'visible';
	document.getElementById('level_title').innerHTML = 'Level 1: De broken shore';
	
	option1.innerHTML = 'Ga richting de tomb of Sargeras';
	option2.innerHTML = 'Kijk rond op de broken shore';
	option3.innerHTML = 'Ga naar de toren van de wardens';

	console.log(document.getElementById('option2').onclick);
	document.body.style.backgroundImage = "url('img/screenshot2.jpg')";
	teksteen.innerHTML = 'Het is je gelukt Guldan te volgen tot de broken shore maar toen ben je zijn spoor kwijt geraakt';
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

	option1.innerHTML = 'Kijk rond';
	option2.innerHTML = 'Praat met de wardens';
	option3.innerHTML = 'Kijk in de toren ';


	option2.setAttribute("onClick", "javascript:Level3();");
	option3.setAttribute("onclick", "javascript:level19();");
	document.getElementById('tomb').pause();
	document.getElementById('broken shore').pause();
	document.getElementById('Nightsong').play();
	var tekst = document.getElementById('tekst')
	teksteen.innerHTML = 'Je ziet in de verte een toren van de wardens staan. Als je in de buurt komt zie je ook een groep van Wardens staan.';

}

function Level3() {
	console.log("Level3()");
	document.getElementById('level_title').innerHTML = 'Level 3: Samenwerkenen?';
	document.body.style.backgroundImage = "url('img/Khadgar 1.jpg')";

	option1.innerHTML = 'Vraag of de wardens Guldan gezien hebben';
	option2.innerHTML = 'Vraag hulp aan de wardens';
	option3.innerHTML = 'Zeg niks';

	option2.setAttribute("onClick", "javascript:Level4();");
	option3.setAttribute("onClick", "javascript:level6();");
	var tekst = document.getElementById('tekst')
	teksteen.innerHTML = 'Misschien kunnen de wardens helpen met het zoeken naar Guldan? denk je.';
}

function Level4() {
	console.log("Level4())");
	document.getElementById('level_title').innerHTML = 'Level 4: Een plan';

	option1.innerHTML = 'Vraag of de wardens het eiland gescout hebben';
	option2.innerHTML = 'Vraag de leider(Maeiv Shadowsong) om hulp met het plan bedenken';
	option3.innerHTML = 'Zeg niks';

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
	teksttwee.innerHTML = 'Je doel is om de kwade warlock Guldan te vinden en te verslaan om Azerot te redden. Jij(Archmage Khadgar) Moet spullen vinden, rond kijken en voor allies zoeken.';

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

	option1.innerHTML = 'Vraag of de wardens het eiland gescout hebben';
	option2.innerHTML = 'Vraag Maeiv Shadowsong(de leider) of hier nog iets gebeurt is.';
	option3.innerHTML = 'Zeg niks';

	option2.setAttribute("onClick", "javascript:level10();");

}
function level10() {
	console.log("level10()");
	document.getElementById('level_title').innerHTML = 'Level 6: geen hulp of nieuws';

	option1.innerHTML = 'Probeer Maeiv Shadowsong te overtuigen om te helpen.';
	option2.innerHTML = 'Volg de wardens naar hun basis';
	option3.innerHTML = 'Ga naar het geluid toe';
	option3.setAttribute("onClick", "javascript:level11();");
	option2.setAttribute("onClick", "javascript:level16();");
	var tekst
	tekst.innerHTML = 'De wardens geven jouw de schuld dat jij Guldan nog niet gestopt hebt en gaan ervan uit dat hij hun basis gaat aanvallen. Ze staan dus op het punt van weg te gaan. Jij kreegt dus geen hulp. Je hoort ook een geluid van de tomb of sargeras komen.';
	option3.setAttribute("onClick", "javascript:level11();");
}
function level11() {
	console.log("level11()");
	document.getElementById('level_title').innerHTML = 'Level 7: the chase begins';
	option1.innerHTML = 'Ga de tomb in.';
	option2.innerHTML = 'Kijk naar de stukken van de ingang voor aanwijzingen';
	option3.innerHTML = 'Wacht op versterking';
	option1.setAttribute("onClick", "javascript:level12();");
	document.getElementById('tomb').pause();
	document.getElementById('broken shore').pause();
	document.getElementById('Nightsong').pause();
	document.getElementById('chase').play();
	var tekst
	tekst.innerHTML = 'Als je weer terug bent bij de tomb of sargeras, zie je dat de ingang kapot is geblazen en je voelt de aanwezigheid van Guldan al binnen in de tomb.'
	document.body.style.backgroundImage = "url('img/tombart2.jpg')";

}
function level12() {
	console.log("level12()");
	document.getElementById('level_title').innerHTML = 'Level 8: het pad';
	option1.innerHTML = 'Kijk rond voor sporen van Guldan';
	option2.innerHTML = 'Volg de wardens naar hun basis';
	option3.innerHTML = 'Volg de vallen naar Guldan ';
	option3.setAttribute("onClick", "javascript:level13();");
	document.getElementById('tomb').pause();
	document.getElementById('broken shore').pause();
	document.getElementById('Nightsong').pause();
	document.getElementById('chase').play();

	var tekst
	tekst.innerHTML = 'Als je de tomb of sargeras in loopt stap je bijna op een val maar je kan het maar net ontwijken. De vallen zelf zijn snel neergelegd bijna of Guldan haast heeft'
	document.body.style.backgroundImage = "url('img/tombart2.jpg')";
}
function level13() {
	console.log("level13()");
	document.getElementById('level_title').innerHTML = 'Level 9: het duel';
	option3.innerHTML = 'hoi'
	option3.setAttribute("onClick", "javascript:level14();");
	document.getElementById('tomb').pause();
	document.getElementById('broken shore').pause();
	document.getElementById('Nightsong').pause();
	document.getElementById('chase').pause();

	document.body.style.backgroundImage = "url('img/insidetomb.jpg')";
}
function level14() {
	console.log("level14()");
	document.getElementById('level_title').innerHTML = 'Level 10: uitleg';
	option1.innerHTML = 'Daag Guldan uit.';
	option2.innerHTML = 'Ga terug naar buiten.';
	option3.innerHTML = 'Maak arcane elementals en laat ze de kamer doorzoeken.';
	option3.setAttribute("onClick", "javascript:level15();");
	document.getElementById('tomb').pause();
	document.getElementById('broken shore').pause();
	document.getElementById('Nightsong').pause();
	document.getElementById('chase').play();
	var tekst
	tekst.innerHTML = '.'
	document.body.style.backgroundImage = "url('img/insidetomb.jpg')";
}
function level15() {
	console.log("level15()");
	document.getElementById('level_title').innerHTML = 'Level 11: verloren?';
	option1.innerHTML = 'Vraag Maeiv waarom ze terug is gekomen.';
	option2.innerHTML = 'Probeer een ander pad te vinden naar Guldan';
	option3.innerHTML = 'Geef het op en trek terug';
	option3.setAttribute("onClick", "javascript:level17();");
	option1.setAttribute("onClick", "javascript:level18();");
	document.getElementById('tomb').pause();
	document.getElementById('broken shore').pause();
	document.getElementById('Nightsong').pause();
	document.getElementById('chase').play();
	var tekst
	tekst.innerHTML = 'Guldan heeft je uit de ruimte geschoten en de toegang afgesloten maar Maeiv is gekomen maak je nog een kans om hem te stoppen.'
	document.body.style.backgroundImage = "url('img/insidetomb.jpg')";
}
function level16() {
	console.log("level16()");
	document.getElementById('level_title').innerHTML = 'GAME OVER';
	document.getElementById('option3').style.visibility = 'hidden';
	document.getElementById('option2').style.visibility = 'hidden';
	document.getElementById('option1').style.visibility = 'hidden';
	document.body.style.backgroundImage = "url('img/wardens1.jpg')";
	var tekst
	tekst.innerHTML = 'je volgt de wardens naar hun basis maar wordt gevangengenomen. Druk op F5 om opnieuw te beginnen'

}
function level17() {
	console.log("level17()");
	document.getElementById('level_title').innerHTML = 'GAME OVER';
	document.getElementById('option3').style.visibility = 'hidden';
	document.getElementById('option2').style.visibility = 'hidden';
	document.getElementById('option1').style.visibility = 'hidden';
	document.body.style.backgroundImage = "url('img/dalaran.jpg')";
	var tekst
	tekst.innerHTML = 'Je geeft het op en trekt terug naar de stad dalaran en guldan ontsnapt.'
}
function level18() {
	console.log("level18()");
	document.getElementById('level_title').innerHTML = 'The warden'
	document.body.style.backgroundImage = "url('img/shadowsong.jpg')";
	var tekst
	option1.innerHTML = 'Volg Maeiv terug naar Guldan.'
	option2.innerHTML = ''
	tekst.innerHTML = 'Maeiv is teruggekomen omdat ze wist dat dit zo gebeuren maar nu is ze hier om te helpen.'


}
function level19() {
	console.log("level19()");
	document.getElementById('level_title').innerHTML = 'de warden tower'
	tekst.innerHTML = 'Als je de tower binnen gaat zie je een paar kisten met spullen erin.'
	document.body.style.backgroundImage = "url('img/tower2.jpg')"

}