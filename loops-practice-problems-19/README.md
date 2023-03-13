# loops-practice-problems-19

- [demo](#demo)
- [JavaScript-loop](#JavaScript-loop)

- [while-loop](#while-loop)
- [javascript-for-Loop](#javascript-for-Loop)

### demo

<details>
<summary>
  <h3> ..? (Click Me)</h3>
</summary>
<br >

```js

```

### JavaScript-loop

<details>
<summary>
  <h3> JavaScript loop (Click Me)</h3>
</summary>
<br >

- কোন স্টেটমেন্টকে ধারাবাহিক ভাবে বার বার দেখানোর জন্য Loop ব্যবহার করা হয় প্রোগ্রামিং ভাষার ক্ষেত্রে । প্রতিটি কম্পিউটার ভাষায় Loop বর্তমান ঠিক জাভাস্কিপ্টের ন্যায় ।

- কল্পনা করুন আমার প্রয়োজন ১ থেকে ১০০ সংখ্যা । এক্ষেত্রে আমরা Loop ব্যবহার করে সহজে আমাদের চাহিদা পূরণ করতে পারি । লুপ ব্যবহার করার ফলে কোডটি জটিল হয় না ।

- কটি লুপ (Loop) এর তিনটি অংশ থাকে :
- Initialization - Initialization হিসাবে ভ্যারিয়বেল ও তার ভ্যালু লেখা হয় ।
- Condition - কতবার লুপ চলবে সেটি Condition এর মধ্যে লিখতে হয় ।
- Increment / Decrement - লুপের ধাপ সৃষ্টি হয় ।

- Loop এর প্রকারভেদ :
- Loop সাধারণত পাঁচ প্রকারের নিচে লিস্ট দেওয়া হল -

- While Loop
- Do / Whlie Loop
- For Loop
- For / inloop এটি object এর জন্য
- Foreach এটি Array জন্য

```js

```

</details>

</details>
- [ while-loop](#while-loop)

### while-loop

<details>
<summary>
  <h3>JavaScript while loop? (Click Me)</h3>
</summary>
<br >
  - কোন একটি শর্ত বা condition পুরন না হওয়া পর্যন্ত কোন কাজ চালিয়ে যেতে জাভাস্ক্রিপ্ট এর while লুপ ব্যবহার করা হয়। এক্ষেত্রে নির্ধারিত শর্ত বা condition টি মিথ্যা অর্থাৎ false না হওয়া পর্যন্ত while লুপ টি চলতেই থাকবে।

- উদাহরণ স্বরূপ বলা যায়, একজন শিক্ষক আপনাকে একটি অংক করতে দিল। আপনি যত বার অংকটি ভুল করছেন, ততবার শিক্ষক আপনাকে অংক টি করতে বলছে, অর্থাৎ কেবল মাত্র অংকটি করতে পারলেই আপনি এই কাজ থেকে মুক্তি পাবেন। জাভাস্ক্রিপ্ট এর while লুপ টি পুরোপুরি এই রকম।

- প্রথমত একটি ভ্যারিয়বেল নেওয়া হয় এবং তার ভ্যালু অ্যাসাইন করা হয় initialization ।
- দ্বিতীয়ত While নামে একটি কীওয়ার্ড লেখা হয় while loop ব্যবহারের জন্য এবং প্রথম বন্ধনীর ভিতরে কন্ডিশান দেওয়া হয় লুপটি কত বার চলবে ।
- Loop কে পুনরায় সচল করার জন্য অ্যারিথমেটিক অ্যাসাইনমেন্ট অপারেটর ব্যাবহার করা হয় ।

- যখন While লুপের কাজ শুরু হয় তখন জাভাস্কিপ্ট চেক করে দেখে যে ভ্যারিয়বেলের ভ্যালু অনুযায়ী কন্ডিশান স্টেটমেন্ট টি সত্য কি না । যদি সত্য হয় তাহলে সেকেন্ড ব্রাকেট { } এর মধ্যের কোড গুলো এক্সিকিউট হয় ।

- এরপর Increment / Decrement স্টেটমেন্ট ভ্যারিয়বেল এর ভ্যালুতে 1+ বা 1- করে । পুনরায় প্রোগ্রামকে আবার কন্ডিশান স্টেটমেন্টে নিয়ে গিয়ে কন্ডিশান চেক করা হয় । যদি কন্ডিশান সত্য হয় তাহলে সেকেন্ড ব্রাকেটএর মধ্যে কোড গুলো পুনরায় এক্সিকিউট হয় ।

- এভাবে লুপটি চলতে থাকবে যতক্ষণ না কন্ডিশান মিথ্যা হবে । কন্ডিশান মিথ্যা হলেই প্রোগ্রাম লুপ থেকে বের হয়ে আসবে । কন্তু সর্বদা স্মরণ রাখবেন কন্ডিশান স্টেটমেন্ট টি যদি সব সময় সত্য হয় তবে আপনি কখনও While Loop থেকে বের হয়ে আসতে পারবেন না । আপনার কম্পিউটার এর ক্ষতি ও হতে পারে । তাই While Loop ব্যবহারের সময় সতর্ক হওয়া আবশ্যক ।

### While

```js
// if(condition){

// }

// roastGiven = roastGiven + 1;
// roastGiven += 1;
/* 
1. Loop variable
2. condition inside while
3. Loop body
4. Change the loop variable
*/

// var roastGiven = 0;
// while (roastGiven < 10) {
//     console.log('Roast Den, Please !!')
//     console.log(roastGiven);
//     roastGiven++
// }

var codingAmonDiteHobe = 0;
while (codingAmonDiteHobe < 1) {
  console.log("Coding A Mon Bosbi Kemne Mon To Sadiyar kase🙂");
  console.log(codingAmonDiteHobe);
  roastGiven + 2;
}
```

### even

```js
// target: 1 to 20 all event numbers
var number = 0;
while (number <= 20) {
  console.log(number);
  // number++;
  number = number + 2;
}
```

### number

```js
// Target: Display 1 to 10
var number = 1;
while (number <= 20) {
  console.log(number);
  number++;
}
```

### odd

```js
// target: 1 to 100 all odd number
var number = 1;
while (number <= 100) {
  console.log(number);
  number = number + 2;
}
```

</details>

### javascript-for-Loop

<details>
<summary>
  <h3> javascript for Loop? (Click Me)</h3>
</summary>
<br >

- ফর লুপ দিয়েও while লুপের কাজ করা যায়। ফর লুপ দিয়ে যেসব কাজ হয় while দিয়েও ঐ কাজ করা যাবে। ফর লুপ while এর মতই pretest লুপ, মানে আগে কন্ডিশন চেক করবে এরপর true হলে লুপের অভ্যন্তরের কোড এক্সিকিউট হবে। ফর লুপে ৩ টি এক্সপ্রেশন থাকতে পারে

- ১. ভেরিয়েবল initialization : প্রথম এক্সপ্রেশন দিয়ে ভেরিয়েবল initialize করা হয় এবং এই এক্সপ্রেশন লুপ এক্সিকিউট হওয়ার আগেই এক্সিকিউট বা চেক হবে।

- ২. কন্ডিশন : এরপর একটা কন্ডিশন দেয়া হয় যেটা চেক করে true রিটার্ন করলে লুপ এক্সিকিউট হবে, তবে এটিও ঐচ্ছিক যদি এই্ কন্ডিশন না দেয়া হয় তাহলে ফর লুপ বাই ডিফল্ট true রিটার্ন করে।

- ৩. শেষ এক্সপ্রেশন : এটা দিয়ে ভেরিয়েবলটি আপডেট করা হয় (বাড়ানো কিংবা কমানো হয়)। এটা সবার শেষে এক্সিকিউট হয়। প্রতিবার লুপ ঘুরে আসার পর এটি এক্সিকিউট হয়।

```js
// var roastGiven = 0;
// while(roastGiven < 7 ){
//     console.log('Roast Den, Please !!')
//     roastGiven++;
// }

// for loop
// for(var roastGiven = 0; roastGiven < 7 ; roastGiven++){
//     console.log('Roast Den, Please !!');
// }

// simple version of for loop

/* console.log('simple For loop');
for (var i = 0; i < 7; i++) {
    console.log(i);
}
 */

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// i = i + 2;
// i += 2;
// for (var i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}
```

### Array loops

```js
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// target: display every elements of an array
// var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

// for (i = 0; i < 7; i++) {
//     var number = numbers[i]
//     console.log(number);
// }

// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
// }

var items = ["bottle", "mouse", "sunglass", "pen", "notebook"];

for (var i = 0; i < items.length; i++) {
  var item = items[i];
  console.log(item);
}
```

</details>
### demo

<details>
<summary>
  <h3> ..? (Click Me)</h3>
</summary>
<br >

```js

```

</details>
