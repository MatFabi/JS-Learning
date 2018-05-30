const pressed =[];
const secretCode = 'matfab';

window.addEventListener('keyup', (e)=>{
	pressed.push(e.key);
	pressed.splice(-secretCode.length-1, pressed.length-secretCode.length)

	if(pressed.join('').includes(secretCode)){
		document.bgColor="lightblue";
		document.querySelector('p').innerHTML="good job";
		}
		console.log(pressed);
})