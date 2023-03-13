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

#JavaScript using Method

### What is javaScript ?

-javaScript is high level, interpreted programming language used to make web pages more interactive. JavaScript is a dynamic programming language that's used for web development, web applications, game development, and lots more. JavaScript language is used both on the client-side and server-side allowing you to make web pages interactive.

### জাভাস্ক্রিপ্ট কি?

-JavaScript হলো একটি scripting অথবা programming language যা সাধারনত কোন ওয়েবসাইটে ব্যবহার করা হয়। এই language কে আবার client-side scripting language ও বলা হয় কারণ এর সোর্স কোড গুলো process হয় Client এর web browser দিয়ে।

### কিভাবে কাজ করে

জাভাস্ক্রিপ্ট মূলত ব্রাউজারে বিভিন্ন ইভেন্ট দ্বারা পরিচালিত হয় । যেমন :

1-ক্লিক - যখন কোন ইউজার কোন বাটন বা অবজেক্টের উপরে ক্লিক করতে তখন জাভাস্ক্রিপ্ট কাজ করবে ।
2-ডাবল ক্লিক - ইউজার যখন কোন বাটন বা অবজেক্টের উপরে ডাবল ক্লিক করবে ।
3-রাইট ক্লিক - যখন ওয়েব পেজে রাইট ক্লিক করবে তখন কাজ শুরু হবে ।
-4লোড - ওয়েব পেজটি যখন ব্রাউজারে লোড হবে তখন কাজ করবে ।
-5আনলোড - যখন ওয়েব পেজ থেকে ইউজার বেরিয়ে যাবে তখন কাজ করানো যাবে ।
6-স্ক্রল - ওয়েব পেজ স্ক্রল করলে কাজ করবে ।
7-মাউস হভার - কোন ছবি বা অবজেক্টের উপরে যখন মাউস রাখা হবে তখন ও 8-জাভাস্ক্রিপ্টকে কাজ করাতে পারি ।
9-উইন্ডো রিসাইজ - ব্রাউজারের এর উইন্ডো যখন রিসাইজ করে ছোট বা বড় 10-করা হবে তখন ও কাজ করানো যায় ।
11-কীবোর্ড কী প্রেস - কোন কারনে ইউজার কীবোর্ড থেকে যখন কোন কী প্রেস করবে তখন ও জাভাস্কিপ্ট কাজ করতে পারে ।

### JavaScript Engine কিভাবে কাজ করে?

-JavaScript Engine কিভাবে কাজ করে তা বলতে গেলে অনেক কিছু বলা লাগবে তবে সাধারন ভাবে বলা যায় এভাবে
১। JavaScript Engine প্রথমে আপনার JavaScript Code পড়বে মানে parse করবে।
২। তারপর আপনার JavaScript Code কে পরিবর্তন করে মানে compile করে একটি machine language এ নিয়ে আসবে।
৩। তারপর এই machine language টিই আপনার কাজ করবে।

### JavaScript এর ভার্সন সমূহ

- সর্বপ্রথ JavaScript ১৯৯৫ সালে Brendan Eich নামে একজন ব্যক্তি আবিষ্কার করেছিল।

ECMAScript হলো JavaScript এর অফিসিয়াল নাম এবং এই ECMAScript কে আবার ES ও বলা হয়ে থাকে।

# JavaScript variable

### জাভাস্ক্রিপ্ট ভ্যারিয়বেল কি ?

-ভ্যারিয়বেল (variable) এর অর্থ - পরিবর্তনশীল । প্রোগ্রামে কোন তথ্য বা ডাটাকে বার বার ব্যবহার করার জন্য নির্দিষ্ট Keyword এর মাধ্যমে কম্পিউটারের মেমরি ( Ram memory) ভিতরে স্টোর করে রাখা হয় । এই স্টোর করে রাখা ডাটাকে Variable এর মাধ্যমে যেখানে প্রয়োজন হবে সেখানে ডিক্লিয়ার করা হয় ।

-example
var price = 11;
var age = 17;
var temperature = 38;

// string
var person = "sodor uddin";
var location = "andork killa bandorbon";
var special = 'alia bhatt';

// Boolean
var serious = true;
var isFullMarks = true;
var isSingle = false;

### write-variable

<details>
<summary>
  <h3> How to write variable ? (Click Me)</h3>
</summary>
<br >
- ভ্যারিয়েবল এ letters(a-z), digits(0-9), underscores(_), and dollar signs($) এই চারটি জিনিস ব‍্যবহার করতে পারেন।
- ভ্যারিয়েবল এর নাম ডিজিট বা নম্বর দিয়ে শুরু করা যাবে না। তবে মাঝে কিংবা শেষে ডিজিট ব‍্যবহার করা যাবে। উদাহরণ  var name7 = rakib islam ';
- ভ্যারিয়েবল নামের মধ‍্যে স্পেস বা ফাঁকা রাখা যাবে না।
- ভ্যারিয়েবল এর নামে কোন কিওয়ার্ড ব‍্যবহার করা যাবে।
- ভেরিয়েবলের নাম কেজ সেন্সিটিভ তাই এ ব্যাপারে সতর্ক থাকতে হবে। যেমন A এবং a এক নয়।
- ভেরিয়েবলের নামের মাঝে কোন চিহ্ন যেমন – কমা, ফুলস্টপ ব্যবহার করা যাবে না।
- ভেরিয়েবলের নাম হিসেবে জাভাস্ক্রিপ্টের সংরক্ষিত শব্দ বা Reserved Word গুলো ব্যবহার করা যাবে না।
- চাইলে একসাথে একাধিক ভ‍্যালিয়েবল লেখা যায়। তবে সেক্ষেত্রে প্রতিটি ভ‍্যালিয়েবলের পরে কমা দিতে হবে। উদাহরণ: var name, age, location;

৩ টি উপায়ের ভ্যারিয়েবল ব্যবহার করা যায়:
১. var 2. let = পরবর্তীতে কোন ভ্যারিয়েবলের মান পরিবর্তন করা যায়। বেশিভাগ সময় এটি ব্যবহার করা হয়।
৩. const = এটি কোন ভ্যারিয়েবল দিলে ভ্যারিয়েবলের মান পরিবর্তন করা যায়।

```js
// good variable
var price = 29;
/* 
vaR price = 29;
Var price = 29;
VAR price = 29; */

/*
1. variable name can not be any keywords
var false = 96;
var return = true;
 */

// 2. variable name has to be in one work. No space
// var my home address = "New California";

/*  3. variable name can not have quotation
var "name" = "Tom Hanks"; */

/* 
 4. variable name can not starts with a number but can ends with a number
var 99Club = 1964;
var club25 = 2025;
 */
/* 
 5. How to use long names
 can not use dash
var user-name = "raj bappa";
 */
var user_name = "bappa raj";
var usercurrenthomeaddress = "andor killa bandor ban";
var user_home_address = "andor killa bandor ban"; // snake case
var userHomeAddress = "andor killa bandor ban"; // camel case: we will use this one
var UserHomeAddress = "andor killa bandor ban"; // pascal case

// variable name is case senstive
var person = 25;
var Person = 35;
```

</details>

### Arithmetic-Operators

<details>
<summary>
  <h3>What is ? (Click Me)</h3>
</summary>
<br >

JavaScript Arithmetic Operators
Arithmetic operators perform arithmetic on numbers (literals or variables).

- - Addition
- - Subtraction
- - Multiplication
- \*\* Exponentiation (ES2016)
- / Division
- % Modulus (Remainder)
- ++ Increment
- -- Decrement

```js
var onionPrice = 20;
var eggPrice = 10;
// console.log(onionPrice)

// addition, subtraction
/* var totalPrice = onionPrice + eggPrice;
console.log(totalPrice)
var priceDifference = onionPrice - eggPrice;
console.log(priceDifference);
 */

// console.log(totalPrice);
// console.log(onionPrice);
// console.log(eggPrice);
// console.log(onionPrice + eggPrice);

/* multplication
var orangePrice = 20;
var quantiy = 7;
var totalCost = orangePrice * quantiy;
console.log(totalCost); */

// division
var money = 500;
var player = 10;
var eachPlayer = money / player;
console.log(eachPlayer);
```
