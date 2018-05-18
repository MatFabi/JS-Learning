
    // Regular
console.log('hello');
    // Interpolated
console.log ("hello I am a %s %s!", "Mateusz", ":)")
    // Styled
console.log('%c I am some great text', 'background:red')
    // warning!
console.warn('Be aware!');
    // Error :|
console.error('OH Noooo');

    // Info
console.info('Crocodiles eat 3-4 people per year');

    // Testing
const p=document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');

    // clearing
console.clear();
    // Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();
// Grouping together
dogs.forEach(dog=>{
	console.group(`${dog.name}`);
	console.log(`This is ${dog.name}`)
	console.log(`${dog.name} is ${dog.age} years old`)
	console.log(`${dog.name} is ${dog.age * 7} dog years old`)
	console.groupEnd(`${dog.name}`);
});
    // counting
console.count('Fab');
console.count('Fab');
console.count('Mat');
console.count('Fab');
console.count('Fab');
console.count('Fab');
    // timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
	.then(data=>data.json())
	.then(data=>{
	console.timeEnd('fetching data');
	console.log(data);
})