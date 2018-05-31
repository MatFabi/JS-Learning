const sliderImages = document.querySelectorAll('.slide-in');
function checkSlide(e){
	console.log(window.scrollY);
	sliderImages.forEach(sliderImage=>{
		const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/2;
		const imageBottom = sliderImage.offsetTop + sliderImage.height;
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;
		
		if(isHalfShown && isNotScrolledPast){
			sliderImage.classList.add('active');
		}
		else{
			sliderImage.classList.remove('active');
		}
	});
}

window.addEventListener('scroll', debounce(checkSlide));