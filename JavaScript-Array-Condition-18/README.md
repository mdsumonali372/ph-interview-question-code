# JavaScript-Array-Condition-18

# introduced-to-js-18

# JavaScript Using Method

### what is javaScript?

- [demo](#demo)
- [Arrya](#array)
- [Array-Method](Array-Method)
- [operators](#operators)
- [if-else-conditons](#if-else-conditons)

### demo

<details>
<summary>
  <h3>What is ? (Click Me)</h3>
</summary>
<br >
 reduce

```js

```

</details>

### array

<details>
<summary>
  <h3>What is js Array ? (Click Me)</h3>
</summary>
<br >

- অ্যারে হল একটি বিশেষ ধরনের জাভাস্ক্রিপ্ট ভেরিয়েবল যা একই কাজে ব্যবহৃত একই ধরেনর তথ্য বা data কে একটি একক জাভাস্ক্রিপ্ট ভেরিয়েবলের মাধ্যমে ধারন করতে পারে। এক্ষেত্রে এই অ্যারে অবজেক্ট গুলোকে তাদের সাবস্ক্রিপ্টের মাধ্যমে access করা যায়।
- অ্যারের প্রথম এলিমেন্টটির অবস্থান অবস্থান হয় 0,
- এলিমেন্টটির এলিমেন্টের অবস্থান হয় 1,
- তৃতীয় এলিমেন্টটির অবস্থান হয় 2, এভাবে অন্যগুলো হবে।

```js
var friendsAge = [11, 21, 45, 17, 14, 105, 6];

var picnicFee = [5000, 2000, 4000, 150];

var nayikas = ["mahi", "opu", "sabnoor", "sabana"];
var vowels = ["a", "e", "i", "o", "u"];

console.log(friendsAge.length);
```

- অ্যারের প্রথম এলিমেন্টটির অবস্থান অবস্থান হয় 0,
- এলিমেন্টটির এলিমেন্টের অবস্থান হয় 1,
- তৃতীয় এলিমেন্টটির অবস্থান হয় 2, এভাবে অন্যগুলো হবে।

```js
var numbers = [45, 68, 78, 56, 89, 98];

var num = numbers.indexOf(56);

// 1. get element value by index
var element = numbers[1];
// console.log(element);

// 2. set element value by index
numbers[1] = 77;
numbers[3] = 44;
// console.log(numbers);

// 3. find index of an element
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);
```

</details>

### Array-Method

<details>
<summary>
  <h3>JavaScript Array Methods ? (Click Me)</h3>
</summary>
<br >
 - const fruits = ["Banana", "Orange", "Apple", "Mango"];

- JavaScript Array pop()
- The pop() method removes the last element from an array:
- fruits.pop();
  -The pop() method returns the value that was "popped out":
- let fruit = fruits.pop();
-
-

```js
The pop() method removes the last element from an array:
 fruits.pop();
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();


The pop() method returns the value that was "popped out":
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

JavaScript Array push()
The push() method adds a new element to an array (at the end):
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("tomato");
```

```js
var numbers = [78, 45, 98, 45];
//use push to add element to an array as the last element array
// numbers.push(63);
// console.log(numbers);
var friends = ["balam", "kalam", "salam"];
friends.push("gelam");
friends.push("pailam");
// console.log(friends);

// use pop to get last element
console.log(numbers);
// numbers.pop();
var element = numbers.pop();
console.log(numbers);
console.log(element);
```

</details>

### perators

<details>
<summary>
  <h3>JavaScript comparison operators ? (Click Me)</h3>
</summary>
<br >

- JavaScript comparison operators
  To compare two values, you use a comparison operator. The following table shows the comparison operators in JavaScript:

- Operator Meaning
- <less than
- > greater than
- <=less than or equal to
- > =greater than or equal to
- ==equal to
- !=not equal to

```js
// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 == 6);
// console.log(6 == 6);
// console.log(5 != 6);
// console.log(15 != 15);
// less than or equal
// console.log(5 <= 6)
// console.log( 6 <= 6 )
// console.log( 16 <= 6 )

// greater than or equal
// console.log(5 >= 6)
// console.log(5 >= 2)
// console.log(2 >= 2)

var num1 = 56;
var num2 = 89;

// console.log(num1 < num2);
// console.log(num1 > num2);
// console.log(num1 === num2);
// console.log(num1 !== num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);

// multiple conditions
// money1 > money2 && result1 > result2 && height1 > height2
// money1 > money2 || result1 > result2 || height1 > height2

/* 

- Introduction to JavaScript comparison operators
To compare two values, you use a comparison operator. The following table shows the comparison operators in JavaScript:

- Operator	Meaning
- <	less than
- >	greater than
- <=	less than or equal to
- >=	greater than or equal to
- ==	equal to
!=	not equal to   


*/
```

</details>

### if-else-conditons

<details>
<summary>
  <h3>if-else-conditons? (Click Me)</h3>
</summary>
<br >

- যে সকল ক্ষেত্রে কোন বিশেষ একটা শর্ত বা condition, সত্য বা true হলে তার ওপর নির্ভর করে সুনির্দিষ্ট কোন বিশেষ কার্য অর্থাৎ কোড execute করে এবং মিথ্যা বা false হলে অপর একাধিক শর্ত বা condition এর উপর নির্ভর করে কোন বিশেষ কার্য সম্পাদন করা জন্য অর্থাৎ কোড execute করার জন্য জাভাস্ক্রিপ্ট এর else . . if স্টেটমেন্ট ব্যবহার করা হয়।

- যখন কোন নির্দিষ্ট একটা শর্ত বা condition সত্য অর্থাৎ true হয়, তখন কিছু কোড execute করবে এবং যদি মিথ্যা বা false হয় তবে ভিন্ন একটি শর্ত বা condition কাজ করবে অর্থাৎ execute করবে এবং এই শর্ত বা condition মিথ্যা বা false হলে, ভিন্ন কিছু কোড কাজ করবে অর্থাৎ execute করবে, এ রকম ক্ষেত্রে জাভাস্ক্রিপ্ট এর else . . if স্টেটমেন্ট ব্যবহার করা হয়।

- বিষয়টি একটি উদাহরণ এর মাধ্যমে দেখা যাক। মনে করি বিস্কুট কেনার জন্য আমরা 100 টাকা নিয়ে একটি দোকানে গেলাম। দোকানে আমাদের 300 টাকা মূল্যের এক প্যাকেট বিস্কুট পছন্দ হল, কিন্তু আমাদের কাছে 300 টাকা না থাকায় আমরা 200 টাকা মূল্যের অন্য এক প্যাকেট বিস্কুট পছন্দ করলাম, কিন্তু 200 টাকা না থাকায় আমরা অন্য 100 টাকা মূল্যের অন্য এক প্যাকেট বিস্কুট কিনলাম।
- এক্ষেত্রে আমাদের প্রথম পছন্দ হল 300 টাকা মূল্যের বিস্কুট, দ্বিতীয় পছন্দ হল 200 টাকা মূল্যের বিস্কুট এবং তৃতীয় পছন্দ হল 100 টাকা মূল্যের বিস্কুট। এই কাজটিই হল জাভাস্ক্রিপ্ট এর else . . if স্টেটমেন্ট।

```js
var iphonePrice = 79000;
var myBudget = 95000;
// if iphone price is less than my budget. I will buy the iphone
/**
 *  if iphone price is less than my budget
 *      i will buy the iphone
 *
 *
 * if (condition) {
 *      // will execute if the condition is true
 * }
 *
 * */

if (iphonePrice < myBudget) {
  console.log("i phone kine futani marbo");
}

var chickenPrice = 500;
var myMoney = 50;
// if (chickenPrice <= myMoney){
//     console.log('Murgir raan khamu and haddi chibamu!!!');
// }
// if (chickenPrice > myMoney){
//     console.log('Smashed potato and lentils soup');
// }

/**
 * if chiken er price is less than my budget
 * i will eat chiken
 * na hoi: else
 * */

if (chickenPrice < myMoney) {
  console.log("I will eat Chicken");
} else {
  console.log("I will eat potato");
}
```

#### multiple-condtion

```js
// var isGraduated = true;
// var salary = 75000;
// var cars = 1;

// if(isGraduated == true){
//     console.log('Eso biye kore feli')
// }
// else{
//     console.log('tor Kopale Biya nai')
// }

// if(isGraduated == true && salary > 50000){
//     console.log('Eso biye kore feli')
// }
// else{
//     console.log('tor Kopale Biya nai')
// }

// if(isGraduated == true && salary > 50000 && cars >= 1){
//     console.log('Eso biye kore feli')
// }
// else{
//     console.log('tor Kopale Biya nai')
// }

var isGraduated = false;
var salary = 61000;
var cars = 0;

if (isGraduated === true || salary > 50000 || cars >= 1) {
  console.log("Eso Prem kori");
} else {
  console.log("tomar friend er mobile number dao");
}

if (isGraduated === true && (salary > 50000 || cars >= 1)) {
}
```

### Multi-Stage-condition

```js
var money = 68;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if (danishPrice < money) {
  console.log("Dan Dan danish khamu");
} else if (butterBread < money) {
  console.log("Butter bon khamu");
} else if (toastBiscuit < money) {
  console.log("chubai chubai toast biscuit khamu");
} else {
  console.log("Khali cha e sasther jonno valo");
}
```

```js
var straightLint = false;

if (math == true) {
  if (geometry == true) {
    if (straightLint == true) {
    } else {
      console.log("baka pothe cholba na");
    }
  } else {
    console.log("pithagorous hoite parba na");
  }
} else {
}
```

</details>
