	
(function(){
 "use strict"
	
function playSound(e){
	const key =	document.querySelector(`.key[data-keyCode="${e.keyCode}"]`);
	const audio= document.querySelector(`audio[data-keyCode="${e.keyCode}"]`);
	if (!audio && !key) return;
	audio.currentTime=0;
	audio.play();
	key.classList.add('keydown')
};

function removeTransition(e){
	if(e.propertyName !== 'transform' && !(this.classList.contains('keydown'))) return;
	this.classList.remove('keydown');
}
const keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

})();