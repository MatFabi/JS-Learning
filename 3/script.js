
const inputs = document.querySelectorAll('.inputs');

function changeValue(e){
	if(this.type == "color")
		document.documentElement.style.setProperty(`--${this.name}`, `${this.value}`);
	else{
		document.documentElement.style.setProperty(`--${this.name}`, `${this.value+"px"}`);
	}
}
inputs.forEach(input => input.addEventListener('change', changeValue));
inputs.forEach(input => input.addEventListener('mousemove', changeValue));