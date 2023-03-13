# js-function-object

    - [demo](#demo)
    - [Funtion](#funtion)

### demo

    < details >

<summary>
  <h3>What is ? (Click Me)</h3>
</summary>
<br >
 reduce

```js

```

</details>

### funtion

< details >

<summary>
  <h3>What js Funtion ? (Click Me)</h3>
</summary>
<br >

- Functions
- JavaScript provides functions similar to most of the scripting and programming languages.

- In JavaScript, a function allows you to define a block of code, give it a name and then execute it as many times as you wan

- javaScript Function Syntax
- A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
- Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

- The parentheses may include parameter names separated by commas:
  (parameter1, parameter2, ...)
- The code to be executed, by the function, is placed inside curly brackets: {}

- জাভাস্ক্রিপ্ট ফাংশন হল কিছু জাভাস্ক্রিপ্ট কোড যা সুপ্ত অবস্থায় থাকে, যতক্ষণ পর্যন্ত না তাকে কাজ করতে বা execute করতে বলা হয়। একটি জাভাস্ক্রিপ্ট ফাংশন তখনই কাজ করে যখন কোন জাভাস্ক্রিপ্ট ইভেন্ট সংঘটিত হয় বা অন্য কোন জাভাস্ক্রিপ্ট ফাংশন তাকে call করে। প্রায়শই কোন জাভাস্ক্রিপ্ট প্রোগ্রামে আমাদের কিছু কিছু কাজের পুনরাবৃত্তি করতে হয়, এ রকম ক্ষেত্রে ফাংশন ব্যাবহারের ফলে অনেক সময় বাঁচে। জাভাস্ক্রিপ্ট ফাংশন ব্যবহার করে একই কোড প্রোগ্রামে বার বার না লিখেও বার বার কাজ করানো যায়।

- একটি জাভাস্ক্রিপ্ট ফাংশন ব্যবহার করার জন্য নিচের 2টি কাজ করতে হয়।

- ফাংশন definie করা এবং
- ফাংশন ডাকা বা call করা।

- ফাংশন definie করা : একটি জাভাস্ক্রিপ্ট ফাংশন কি কাজ করবে, তা ফাংশন definie করার সময় অর্থাৎ ফাংশনটি যখন তৈরি করা হয় তখন নির্ধারণ করে দেয়া হয়।

- ফাংশন ডাকা বা call করা: জাভাস্ক্রিপ্ট ফাংশনটি কখন কাজ করবে অর্থাৎ কি ইভেন্ট এর ফলে কাজ করবে, তা নির্ধারণ করাই হল ফাংশন ডাকা অর্থাৎ ফাংশন call করা। উদাহরণ স্বরূপ বলা যায়, কোন এইচটিএমএল বাটন ক্লিক করার ফলে ওয়েব পেজে একটি ফলাফল প্রদর্শিত হবে। এটাই হল ফাংশন ডাকা বা জাভাস্ক্রিপ্ট ফাংশন call করা।

```js
// function declaration
function startFan() {
  console.log("Stand up");
  console.log("walk towards the switch");
  console.log("Press the switch");
}

// call the function
startFan();
console.log("Waking up in the morning");
startFan();
console.log("Eating lunch");
console.log("Watching JS tutorial");
startFan();
```

</details>

### parameters

< details >

<summary>
  <h3>function  parameters ? (Click Me)</h3>
</summary>
<br >

- A function can have one or more parameters, which will be supplied by the calling code and can be used inside a function. JavaScript is a dynamic type scripting language, so a function parameter can have value of any data type.

```js
function bringSingara(money) {
  console.log("taka disen: ", money);
  console.log("ai nen singara");
}

var taka = 300;
// bringSingara(taka);

function add(num1, num2) {
  console.log("going to add:", num1, num2);
}

// add(125, 96);

function sum(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  var sum = a + b + c + d + e;
  console.log(sum);
}

sum(15, 98, 56, 5, 9);
```

</details>

### javaScript return

    < details >

<summary>
  <h3>javaScript return
? (Click Me)</h3>
</summary>
<br >
The return statement ends function execution and specifies a value to be returned to the function caller

```js
function add(number1, number2) {
  console.log(number1, number2);
  var sum = number1 + number2;
  // console.log(sum);
  return sum;
  console.log("I need more code");
  return 15;
  return "hello done";
  return "I am hungry";
}

// add(45, 15);

var total = add(80, 20);
// console.log('total', total)

function bringSingra(money) {
  singraPrice = 10;
  var quantity = money / singraPrice;
  return quantity;
}
var myTaka = 150;

var singaras = bringSingra(myTaka);
console.log(singaras);
```

</details>

### demo

< details >

<summary>
  <h3>What is  Object? (Click Me)</h3>
</summary>
<br >
  - জাভাস্ক্রিপ্ট হল একটি অবজেক্ট নির্ভর ওয়েব প্রোগ্রামিং ভাষা। জাভাস্ক্রিপ্ট এর সকল কিছুই হল অবজেক্ট। ইংরেজি " Object " শব্দটির আক্ষরিক অর্থ হল " বস্তু ", জাভাস্ক্রিপ্টে অবজেক্ট অর্থ হল একটি বিশেষ ধরনের ডাটা যার প্রোপার্টি এবং মেথড রয়েছে। সকল জাভাস্ক্রিপ্ট অবজেক্ট এরই প্রোপার্টি এবং মেথড রয়েছে। জাভাস্ক্রিপ্টে আমরা প্রয়োজন অনুযায়ী অবজেক্ট এবং ভেরিয়েবল টাইপ তৈরি করতে পারি। প্রোগ্রামিং এর কাজ গুলো জাভাস্ক্রিপ্ট অবজেক্ট এর প্রোপার্টি এবং মেথড ব্যবহার করে করে করা হয়।

- অবজেক্ট তৈরি
- জাভাস্ক্রিপ্টে 3টি পদ্ধতিতে কোন অবজেক্ট তৈরি করা যায়, এগুলো - হল নিম্নরূপ -

- সরাসরি অবজেক্ট তৈরি,
- অবজেক্ট constructor অর্থাৎ নতুন কিওয়ার্ড ব্যবহার করে এবং
- অবজেক্ট literal ব্যবহার করে।

```js

```

</details>
