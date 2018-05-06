const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities=[];
fetch(endpoint)
	.then(blob=>blob.json())
	.then(data=>cities.push(...data));

function getMatches(wordToMatch, cities){
	const regEx = new RegExp(wordToMatch, 'gi')
	return cities.filter(place=>{
		return place.city.match(regEx) || place.state.match(regEx) 
	})
};

function displayMatches(){
	const matchArray = getMatches(this.value, cities)
	const html = matchArray.map(place=>{
		const regEx = new RegExp(this.value, 'gi');
		const cityName = place.city.replace(regEx, `<span class="hl">${this.value}</span>`)
		const stateName = place.state.replace(regEx, `<span class="hl">${this.value}</span>`)
		return `
				<li>
					<span class="name">${cityName}, ${stateName}</span>
					<span class="population">${place.population}</span>
				</li>
			`
	}).join('');
	suggestions.innerHTML=html;
};

const searchPlace = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchPlace.addEventListener('change',displayMatches);
searchPlace.addEventListener('keyup',displayMatches);


	