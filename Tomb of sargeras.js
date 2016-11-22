document.getElementById('option1').innerHTML = 'Level1';
document.getElementById('level_title').innerHTML = 'Start';
document.getElementById('option2').innerHTML= 'uitleg';
document.getElementById('option3').style.visibility = 'hidden';
document.getElementById('option3').innerHTML = 'Level2';
console.log(document.getElementById('option2').onclick);



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