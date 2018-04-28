// 1. Get elements form inventors array and filter by year
console.log("1st task");
const fifteen=inventors.filter(inventor => (inventor.year>=1500 && inventor.year<1600));
console.table(fifteen);

//2.
console.log("2nd task");
const inventorsArray = inventors.map(inventor=> inventor.first +' '+ inventor.last);
console.table(inventorsArray);


//3
console.log("3rd task");

const oldestToYoungest = inventors.sort((a,b)=> a.year>b.year ? 1 : -1);
console.table(oldestToYoungest);

//4
console.log("4th task");

const totalYears = inventors.reduce((total,inventor)=> total + (inventor.passed-inventor.year),0);
console.log(totalYears);

//5 
console.log("5th task")

const sortByYears = inventors
														.map(inventor=>(inventor.passed-inventor.year)+'lat' + ` ${inventor.first} ${inventor.last}`)
														.sort((a,b)=>a>b?1:-1);
console.log(sortByYears);

// 5* 

const sortArrByYears = inventors.sort(function (a,b){
	const firstPerson = a.passed-a.year;
	const secondPerson = b.passed-b.year;
	return firstPerson>secondPerson? 1:-1;
});
console.table(sortArrByYears)

// 5**
const sort2 = inventors.sort((a,b)=> (a.passed-a.year)-(b.passed-b.year));
console.table(sort2)

// 5***
const sort3 = inventors.sort((a,b)=> (a.passed-a.year)>(b.passed-b.year)?1:-1)
console.table(sort3)

// 7
console.log("7th")
const sortLastName = inventors.sort((a,b)=> a.last>b.last?1:-1)
console.log(sortLastName)

// 7 - Ppl
const sortPpl = people.sort(function(a,b){
	const[last,first] = a.split(', ')
	console.log(last,first)
})
// 8

const dataCount = data.reduce(function(obj,item){
	if(!obj[item]){
		obj[item] = 0;
	}
		obj[item]++;
		return obj;
},{})
console.log(dataCount);