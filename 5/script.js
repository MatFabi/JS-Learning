
let items=document.querySelectorAll('.items')
function clickEvent(){
	this.querySelector('.item-textCenter').classList.toggle('sizeUp')
	if(this.style.flex !=="5 1 0%")
		this.style.flex="5";
		else{
			this.style.flex="1";
		}
}
function upDown(){
	this.querySelector('.item-textTop').classList.toggle('goUp')
	this.querySelector('.item-textBottom').classList.toggle('goDown')
}
items.forEach(e=>e.addEventListener('click', clickEvent))
items.forEach(e=>e.addEventListener('transitionend', upDown))

