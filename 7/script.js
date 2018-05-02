    // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];


    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // Array.prototype.every() // is everyone 19 or older?

console.log("ex.1 - some")
const atLeast19 = people.some(person=> (new Date().getFullYear()-person.year)>=19)
console.log(atLeast19);

console.log("ex.2 - every")
const isEveryMoreThan19 = people.every(person=> (new Date().getFullYear()-person.year)>=19)
console.log(isEveryMoreThan19);


    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
console.log("ex.3 - find")
const findComment = comments.find(comment=>comment.id==823423)
console.log(findComment)


    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

console.log("ex.4 - findIndex")

console.log("before splice")
console.log(comments)

const indexOfSearch = comments.findIndex(comment=> comment.id==823423)
//delete comments[indexOfSearch];

const spliceIndex = comments.splice(indexOfSearch, 1)

console.log("after splice")
console.log(comments)




