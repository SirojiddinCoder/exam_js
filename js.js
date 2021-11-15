// var ar = 'salom'
// console.log(ar.padStart(8));
	// var ar = 'salom';
    //  console.log(ar.replace(ar[0], ar[ar.length - 2]));

    // console.log(0.1 + 0.2);
    // console.log(0.1 + 0.2 == 0.3);
    // const person = { age: 20, name: 'Ben' };
    // const peopleArray = [person, person, person];
    // peopleArray[1].name = 'Joe';
    // console.log(peopleArray[0].name);

//     const person = {  age: 20,  name: 'Ben'};
// const peopleArray   =  [{...person}, {...person}, {...person}];
// peopleArray[1].name = 'Joe';
// console.log(peopleArray[0].name);

// console.log(new Number(5) === 5);

const myArr = [1,2,3];
const arrTwo = myArr.splice(0,4).slice(0,2);
arrTwo[0] = 9;
console.log(arrTwo);
