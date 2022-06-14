// truesy and falsy
const input = prompt();

if (!input) {
    console.log("입력값이 없습니다.");
} else {
    console.log(input);
}

//일급객체 예시1
function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        }
    }
}

function add(a, b) {
    return a + b;
}

let curriedAdd = curry(add);

console.log(curriedAdd(1)(2));


//일급객체 예시2
const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('clicked');
})

//비동기 자바스크립트
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(console.log); //=> {userId: 1, id: 1, ...}
console.log('test');

//논리연산자 &&
const me = {
    name: "유예빈",
    age: 26,
    gender: "male",
}

const someone = {
    name: "오하은",
    age: 24,
    gender: "female",
}

function addMilitaryStateIfMale(person) {
    if (person.gender === "male") {
        person.militaryState = false;
    }
}

addMilitaryStateIfMale(me);
addMilitaryStateIfMale(someone);

function parseBoolean(value) {
    if (value === true) {
        return "참";
    } else if (value === false) {
        return "거짓";
    }
}

me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));

someone.militaryState !== undefined && console.log(parseBoolean(someone.militaryState));

//논리연산자 ||
const input2 = prompt();

console.log(input2 || "입력값이 없습니다.");

//비구조화 할당
const Me = {
    name: "유예빈",
    age: 26,
}

const { name, age } = Me;

//spread
const militaryMe = {
    ...Me,
    melitaryState: false,
}
console.log(militaryMe);

const animals = ["개", "고양이"];
const anotherAnimals = [...animals, "참새"];

console.log(anotherAnimals);

//rest
const { militaryState, ...another } = me;
console.log(another);

const numbers = [0, 1, 2, 3, 4, 5, 6];
const [zero, one, ...rest] = numbers;
console.log(rest);