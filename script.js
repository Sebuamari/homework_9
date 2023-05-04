// 1 
// შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
let numbers = [ 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8 ];

function countSumOfPositiveNumbers(nums) {
    let sum = 0;
    for (number of nums) {
        number > 0 ? sum += number : '';
    }
    return sum;
}
console.log(countSumOfPositiveNumbers(numbers));

// 2
// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
let numbers1 = [ 10, 50, 6, 7, 8, 11, 6, 3, 9 ];

function countSumOfNumbers(nums) {
    let sum = 0;
    for (number of nums) {
        sum += number;
    }
    return sum;
}
console.log(countSumOfNumbers(numbers1));

// 3
// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true 
// და false თუ isloggedin ფროფერთი არის false;
let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}

function getName(user) {
    return user.firstname + ' ' + user.lastname + ' ' + user.isloggedin;
}
console.log(getName(user));

// 4
// შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი
//  და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური.
function findMaximumOfNumbers(nums) {
    let max = nums[0];
    nums.forEach((num) => num > max ? max = num : '');
    return max;
}
console.log(findMaximumOfNumbers(numbers));

// 5
// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი.
// თუ ლუწია დააბრუნოს - ‘this number is even' თუ კენტია დააბრუნოს - 'this number is odd'
function oddOrEven(number) {
    return number % 2 === 0 ? 'this number is even' : 'this number is odd';
}
console.log(oddOrEven(6));
console.log(oddOrEven(7));

// 6
// მოცემულია მასივი
let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];
// for ორივე გზით და foreach-ის საშუალებით გამოიტანეთ მხოლოდ ის სიტყვებუ რონლის სიმბოლოების რაოდენობდა მეტია
// 4 და მოიცავს ‘av’ სიმბოელობის tთანმიმდევრობას; - include უნდა გამოიყენოთ
for (let i = 0; i < array.length; i++) {
    array[i].length > 4 && array[i].includes('av') ? console.log(array[i]) : '';
}

for (word of array) {
    word.length > 4 && word.includes('av') ? console.log(word) : '';
}

for (let index in array) {
    array[index].length > 4 && array[index].includes('av') ? console.log(array[index]) : '';
}

array.forEach(word => word.length > 4 && word.includes('av') ? console.log(word) : '');

// 7
// მოცემულია მასივი:
let array1 = [1,2,3,4,5];
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1
let reversed = [];
for (let i = array1.length - 1; i >= 0; i--) {
    reversed.push(array1[i]);
}
console.log(...reversed);

// 8
// ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი,
// თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;
const getUserAge = (birthYear, currentYear) => {
    let userAge = currentYear - birthYear;
    return userAge >= 18 ? userAge + ' - სრულწლოვანი' : userAge < 18 ? ' - არასრულწოვანი' : '';
};

console.log(getUserAge(1999, 2023));