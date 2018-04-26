
let sec = document.querySelector('sec');

function setDate(){
	let currentDate = new Date();
	let currentSec = currentDate.getSeconds();
	let secDegrees = ((currentSec/60)*360)+90;
	let currentMin = currentDate.getMinutes();
	let minDegrees = (((currentMin/60)*360))+((currentSec/60)*6)+90;
	let currentHour = currentDate.getHours();
	let degreesHour = ((currentHour/12)*360)+((currentMin/60)*30)+90;
	function whatHour(){
		return ((currentHour>=10 ? currentHour : '0'+currentHour)+':'+(currentMin>=10 ? currentMin : '0'+currentMin)+':'+(currentSec>=10 ? currentSec : '0'+currentSec)
		 );
	}
	document.querySelector('.sec').style.transform=`rotate(${secDegrees}deg)`;	document.querySelector('.min').style.transform=`rotate(${minDegrees}deg)`;
	document.querySelector('.hour').style.transform=`rotate(${degreesHour}deg)`;
	document.querySelector('.numeric').innerHTML=whatHour();
}
setInterval(setDate, 1000);

	