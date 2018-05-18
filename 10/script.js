const checkboxes = document.querySelectorAll('.inbox [type=checkbox]');

let lastChecked;

function handleCheck(e){
let inBetween=false;
	if(e.shiftKey && this.checked){    //check if shiftKey is pushed and input is checked
		checkboxes.forEach(checkbox=>{        // if so, loop over all checkboxes
			if(checkbox === this || checkbox === lastChecked){       // if event is === this or e===last checked change flag - inBetween.
				inBetween = !inBetween;
			}		
			if(inBetween){                                    /// if flag == true, check checkbox
				checkbox.checked = true;              
			}
		})	
	}
		lastChecked=this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));