// 출력
console.log("Hello");

//var,let,const
var n = 2;
let num = 3;
const PI = 3.14;

//자료형
let numver = 1;
let str = 'abc';
let bool = true;
let undi = undefined;
let nul = null;
let symbol = Symbol();
let array = [];
let obj = {};
let func = function() {};

//숫자형
let IsInfinity = 10 / 0;
let IsNaN = 10 / "칠";
console.log(IsInfinity, IsNaN);

let sum = 0.1 + 0.2;
console.log(sum);

//문자열형
let str2 = "I'm fine Thank you \"and you?\"";
console.log(str2);

//undefined, null
let udf; //undefined 
let nul2 = null //의도적으로 비워둠 명시

//논리형
let bool1 = true;
console.log(bool1);

let bool2 = 7 > 10;
console.log(bool2);

//배열
let arr = [];
console.log(arr);

let arr2 = [10, 20];
console.log(arr2);

let arr3 = [10, "abc", true, null, undefined, function() {}, {}];
console.log(arr3);
//⇒ [10, ‘abc’, true, null, undefined, [Function], {}]

//**인덱스(index)**: 배열이 가지고 있는 일종의 순서
let arr4 = [10, 20];
console.log(arr[1]);

//객체
let obj = {};

let student1 = { koreanScore: 90, englishScore: 70, mathScore: 80, scienceScore: 60 };
console.log(student1["koreanScore"]);
console.log(student1.englishScore);

// + 키 값을 문자열(“ ”, ‘ ’)로 쓰게 되면 띄어쓰기 가능, but 점(.) 연산자 사용 불가능
let student2 = { "English score": 70 }
console.log(student2["English score"]);
// ⇒ 70
console.log(student2.English score);
// ⇒ *오류*

//함수
function gugudan() {
    console.log("3*1 = 3");
    console.log("3*2 = 6");
    console.log("3*3 = 9");
}
const gugudan = function gugudan() {
        console.log("3*1 = 3");
        console.log("3*2 = 6");
        console.log("3*3 = 9");
    }
    //  + 함수를 실행 == 함수를 호출
gugudan();

// + **함수 표현식은 변수의 이름으로만 호출할 수 있음**
const gugudan = function ddd() {
    console.log("3*1 = 3");
    console.log("3*2 = 6");
    console.log("3*3 = 9");
}

ddd();
// ⇒ ***x오류 (변수의 이름이 아닌 함수의 이름으로 호출했기 때문)***

const gugudan = function() {
        console.log("3*1 = 3");
        console.log("3*2 = 6");
        console.log("3*3 = 9");
    }
    // → *익명 함수 (Anonymous function)*


//인수와 매개변수
function printFruit(name) {
    console.log(name);
}
printFruit('banana');
// ⇒‘banana’→ name
// ⇒ 여기서‘ banana’ 는 인수, name은 매개변수


// ※ 여러 개의 데이터도 전달 가능
function printFruit(name, price) {
    console.log(name + "는 " + price + "원 입니다.");
}
printFruit('banana', 2000);
// ⇒, (콤마) 를 이용하여 여러 데이터 전달
// ⇒‘ banana’→ name, 2000→ price

//return
function sum(number1, number2) {
    return number1 + number2;
}
const sum_result_1 = sum(10, 20);
console.log(sum_result_1);
// ⇒ 변수 sum_result_1에 반환된 데이터 저장

function printReturn() {
    console.log('return 실행 전');
    return;
    console.log('return 실행 후');
}
printReturn();
// ⇒ return 키워드문 만나게 되면 함수 실행 종료

//화살표 함수
const pow = x => x * x;
const result = pow(10);
console.log(result);

const printPie = () => 3.14;
const result2 = printPie();
console.log(result);

const getObject = () =>
    ({
        name: "철수",
        age: 20
    })
const obj2 = getObject();
console.log(obj2.name);

function outer(x) {
    return function inner() {
        return x * x;
    }
}

// 1. function 키워드, 식별자 제거 후 변수에 함수 담아줌
const outer = (x)⇒ {
        return function inner() {
            return x * x;
        }
    }
    // 2. 겉에있는 중괄호 제거, return 키워드 제거
const outer = (x)⇒
function inner() {
    return x * x;
}
// 3. function 키워드, 식별자 제거 후 화살표 함수 넣어주기+return 키워드 제거
const outer = (x)⇒()⇒ { x * x; }
const innerFuc = outer(10);
const result = innerFuc();
console.log(result);

//표현식과 산술연산자
// 덧셈연산자
let addition = 20 + 10;
console.log(addition);
// 뺄셈 연산자
let subtraction = 20 - 10;
console.log(subtraction);
// 곱셈 연산자
let multiplication = 10 * 10;
console.log(multiplication);
// 나눗셈 연산자
let division = 10 / 5;
console / log(division);
// 나머지 연산자
let remainder = 10 % 3;
console.log(remainder);
// - +는 문자열 덧셈 가능
let hello = '안녕하세요,' + '수코딩입니다.'
console.log(hello);
// +=(문자열 연결 연산자),+만 가능!!
// - 숫자와 문자열 **피연산자를 혼합**하여 사용 가능

// 숫자와 문자를 더할 경우
let changeType1 = 20 + '10';
console.log(changeType1);
// 숫자와 문자를 뺄 경우
let changeType2 = 20 - '10';
console.log(changeType2)
    // 숫자와 문자를 곱할 경우
let changeType3 = 20 * '10';
console.log(changeType3);
// 숫자와 문자를 나눌 경우
let changeType4 = 20 / '10';
console.log(changeType4);
// 숫자와 문자를 나머지 연산을 할 경우
let changeType5 = 10 % '3';
console.log(changeType5);
// +뿐만 아니라 다른 연산자도 사용 가능
// +는 문자열 연결 연산자처럼, 나머지는 숫자끼리 연산한 것처럼

//템플릿 문자열
// 문장에 사용되지 않은 “로 감싸줌
let str1 = "I'm Fine Thank You!";
console.log(str1);

// 문장에 사용되지 않은 ‘로 감싸줌
let str2 = '"시작이 반이다"';
console.log(str2);
let str3 = "여러분, '시작이 반이다. '라는 말 들어보셨죠?";
console.log(str3);

// 산술연산자로 표현
let str3 = '"여러분,' + " '시작이 반이다.'라는 말 " + '들어보셨죠?"';
console.log(str3);

// 이스케이프문자로 표현
let str3 = "\"여러분, '시작이 반이다. '라는 말 들어보셨죠?\"";
console.log(str3);

// **문장에 사용되는 ‘, “에 영향을 크게 받음**
// 백틱 기호 사용
let str1 = `
I 'm Fine Thank You!`;
console.log(str1);

let str2 = `"시작이 반이다"`;
console.log(str2);

let str3 = `여러분, '시작이 반이다. '라는 말 들어보셨죠?`;
console.log(str3);

// 변수에 속해져있는 값을 대입하며 문자열 작성 가능
let name1 = '철수';
let name2 = '영희';
let string = `${name1}은 ${name2}를 좋아합니다.`;
console.log(string);
// 구버전 브라우저(IE) 는 지원하지 않음, 지원하려면 바벨(babel) 모듈 사용

// 비교 연산자
// 동등( == )
let comparison1 = 10 == 10;
console.log(comparison1);
// 일치( === )
let comparison2 = 10 === 10;
console.log(comparison2);
// 부등( != )
let comparison3 = 10 != 10;
console.log(comparison3);
// 불일치( !== )
let comparison4 = 10 !== 10;
console.log(comparison4);
// ~보다 큰( > )
let comparison5 = 20 > 20;
console.log(comparison5);
// ~보다 크거나 같다( >= )
let comparison6 = 20 >= 20;
console.log(comparison6);
// ~보다 작다( < )
let comparison7 = 20 < 20;
console.log(comparison7);
// ~보다 작거나 같다( <= )
let comparison8 = 20 <= 20;
console.log(comparison8);
// 동등 & 일치, 부등 & 불일치
// 동등( == )# 피연산자의 자료형을 일치하여 생각
let comparison10 = 10 == "10";
console.log(comparison10);
// 일치( === )# ** 자료형 ** 까지 엄격하게 비교
let comparison11 = 10 === "10";
console.log(comparison11);
// 부등( != )# 피연산자의 자료형을 일치하여 생각
let comparison12 = 10 != "10";
console.log(comparison12);
// 불일치( !== )# 자료형까지 엄격하게 비교
let comparison13 = 10 !== "10";
console.log(comparison13);

//조건문
//if 조건문
if (10 < 20) {
    console.log('10은 20보다 작다.');
}
//switch조건문
switch (key) {
    case value1:
        break;
    case value2:
        break;
    case value3:
        break;
    default:
        break;
}
//반복문
//while반복문
let i = 1;
while (1 < 10) {
    console.log(i);
    i = i + 1;
}
//do-while 반복문
let flag = false;
do {
    console.log('do-while');
} while (flag === true);