//console.log('hello world')
//let numbers = [2,4,6,8,10,12];


//for (let i = 0 ; numbers.length ; i++) {

//}

//console.log(numbers[i])

let people = ['sally', 'sam', 'susan', 'bob'];
for (let i=0; i <people.length; i++) {
//pseudocode- I am using a loop, and everytime the name sam comes up that is what we are looking for
//we are looking for sam
if (people[i]==='sam' ) {
console.log('we found', people[i]);
document.querySelector('h1').textContent = 'we found' + people[1];
} else {
    console.log(people[i], 'is not sam' );
}

}