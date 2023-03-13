# all-about-browsers-42

<details>
<summary>
  যে জিনিস তোমাকে জানতে হবে ? (Click Me)
</summary>
<br >

১. ব্রাউজার কিভাবে কাজ করে। কিভাবে DOM tree, Render Tree বানায় সেটা ছোট করে হলেও নামগুলো জানতে হবে

২. alert, confirm, prompt এই গুলা কোনটা দিয়ে কী কাজ করে। এবং এইগুলার মধ্যে পার্থক্য কি?

৩. URL এর মধ্যে মেজর যে যে অংশ থাকে যেমন query string, href, hash, port এইগুলা জানতে হবে।

৪. location এর মধ্যে href দিয়ে যে যে ওয়েবসাইট দেখতেছো সেটা চেইঞ্জ করে ফেলা যায় সেটা জানতে হবে।

৫. History api এর মধ্যে যে go দিয়ে সামনে পিছনে যেতে পারো সেটা একটু খেয়াল করতে হবে।

৬. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা সম্পর্কে হালকা করে জানতে হবে।

৭. local storage আর session storage কখন কোনটা ইউজ করতে হয় সেটা জানতে হবে

৮. Cookies, local storage, session storage এর মধ্যে পার্থক্য কি সেটা জানতে হবে।

</details>
<details>
<summary> ব্রাউজার কিভাবে কাজ কর ? (Click Me) </summary>
<br>
1.একটি ওয়েব ব্রাউজার সম্প্রদায়ক সফটওয়্যার যা ইন্টারনেটে সংযুক্ত হয় এবং ওয়েব পেজগুলি প্রদর্শন করে। ব্রাউজার কিভাবে কাজ করে তা নিম্নোক্ত ধাপগুলি মোটামুটি অনুসরণ করে:

2.ব্রাউজার ইউজারের রিকোয়েস্ট গ্রহণ করে। ইউজার যখন একটি URL টাইপ করে বা একটি লিঙ্কে ক্লিক করে একটি ওয়েব পেজ লোড করতে চায়, ব্রাউজার একটি রিকোয়েস্ট তৈরি করে।

3.ডিএনএস সার্ভার থেকে ইউআরএল এর হোস্টের আইপি ঠিকানা সংগ্রহ করে। সার্ভারটি একটি রিসপন্স প্রেরণ করে যা ইউআরএল-এর হোস্টের আইপি ঠিকানা সহ থাকে।

4.সার্ভারটি রিকোয়েস্ট পেতে পারে এমন পুরোটাই থাকলে সেটি সরাসরি রিসপন্স করে এবং ব্রাউজার ডাটা পাঠায়। আরও কমন হয় যে সার্ভারটি ডাটা বিল্ড করতে পারে এবং তারপর র

5.A web browser is a software application that connects to the internet and displays web pages. Here is a general overview of how a web browser works:

6.The user enters a URL or clicks on a link to access a web page. The browser sends a request to the server for the page.

7.The server returns an HTML file with CSS and JavaScript files attached. The browser starts to parse the HTML and construct a Document Object Model (DOM) tree.

8.As the browser parses the HTML, it creates a DOM tree, which is a hierarchical structure of HTML elements and their relationships.

9.The browser requests additional resources like images, stylesheets, and JavaScript files.

10.Once all the resources are downloaded, the browser renders the page by applying the CSS styles to the HTML elements and executing the JavaScript code.

11.The browser displays the final rendered page on the screen, allowing the user to interact with the page.

12.he user can then interact with the page by clicking on links, filling out forms, or performing other actions that cause the browser to send requests to the server and update the page.

13.The browser continues to run JavaScript code and listen for user input, repeating the process of requesting and rendering pages as needed.

14.In summary, a web browser works by fetching and rendering web pages, executing JavaScript code, and allowing users to interact with the page. It does this by parsing HTML, creating a DOM tree, and applying CSS styles to the elements. The browser also requests additional resources like images and JavaScript files, and updates the page as users interact with it.

</details>

<details>
<summary> BOM (Browser Object Model) and DOM (Document Object Model) ? (Click Me) </summary>
<br>
1.BOM (Browser Object Model) and DOM (Document Object Model) are two distinct but related APIs in web development. Here are the main differences between BOM and DOM:

2.Definition: The BOM is a set of objects and methods provided by the browser to allow developers to manipulate the browser window and its properties, while the DOM is a set of objects and methods that represent the HTML or XML document and allow developers to access and manipulate its content and structure.

3.Scope: The BOM provides objects and methods for manipulating the browser window, such as opening and closing windows, resizing, and scrolling, whereas the DOM provides objects and methods for manipulating the HTML or XML document, such as accessing and changing the content of elements, adding or removing elements, and handling events.

4.Object hierarchy: The BOM objects are not hierarchical, while the DOM objects are hierarchical, forming a tree-like structure with the document element at the top.

5.Standardization: The DOM is a standard defined by the W3C (World Wide Web Consortium), while the BOM is not a standardized API and varies between different browsers.

6.Compatibility: The DOM is more widely supported and compatible across different browsers than the BOM.

7.In summary, BOM provides access to browser-specific functionalities, while the DOM provides access to the document content and structure. The DOM is a standardized API and is widely supported, while the BOM is not standardized and varies across different browsers

</details>
<details>
<summary> Location API is a browser ? (Click Me) </summary>
<br>
- The Location API is a browser API that provides access to the current location and URL of the browser. It allows developers to obtain information about the current location of the user and to change the location of the current document. The Location API is a part of the BOM (Browser Object Model) and provides access to the location object, which has properties and methods that allow developers to manipulate the location of the current document.
- The most commonly used properties of the location object include:

1.href - returns the entire URL of the current page.
2.protocol - returns the protocol (http, https, ftp, etc.) of the current page.
3.host - returns the domain name and port number of the current page.
4.hostname - returns the domain name of the current page.
5.port - returns the port number of the current page.
6.pathname - returns the path and filename of the current page.
7.search - returns the query string of the current page.
8.hash - returns the anchor part of the current page URL.

- The most commonly used methods of the location object include:

  9.assign(url) - loads a new document with the specified URL.

  10.replace(url) - replaces the current document with the specified URL.

  11.reload() - reloads the current document. Overall, the Location API is a powerful tool for developers to manipulate the URL of the current page and to provide location-based functionality in web applications.

  12.লোকেশন এপিআই হল ব্রাউজার এপিআই এর একটি যা ব্যবহারকারীর ব্রাউজারের বর্তমান লোকেশন এবং ইউআরএল এর বিষয়বস্তু প্রদান করে। এটি ডেভেলপারদের জন্য সুযোগ সৃষ্টি করে ব্যবহারকারীর বর্তমান লোকেশন সম্পর্কিত তথ্য পেতে এবং বর্তমান ডকুমেন্টের লোকেশন পরিবর্তন করতে। লোকেশন এপিআই ব্রাউজার অবজেক্ট মডেল (BOM) এর একটি অংশ এবং লোকেশন অবজেক্ট অ্যাক্সেস প্রদান করে, যা বর্তমান ডকুমেন্টের লোকেশন এবং এর প্রপার্টি এবং মেথডগুলি পরিবর্তন করতে সক্ষম করে।

  13.লোকেশন অবজেক্টের সবচেয়ে ব্যবহৃত প্রপার্টিগুলি হল:

  14.href - বর্তমান পৃষ্ঠার সম্পূর্ণ URL পেতে।

  15.protocol - বর্তমান পৃষ্ঠার প্রোটোকল (http, https, ftp, ইত্যাদি) পেতে।

  16.host - বর্তমান পৃষ্ঠার ডোমেইন নাম এবং পোর্ট ন

</details>

<details>
<summary> What is cookie
? (Click Me) </summary>
<br>
1.A cookie is a small text file created by a web server and stored on a user's computer by their web browser. Cookies are commonly used by websites to track and store information about their users, such as their preferences, login status, and browsing history.

2.Cookies are typically used to identify a user across multiple visits to a website, allowing the website to personalize the user's experience and remember their preferences. For example, a shopping website might use cookies to remember a user's shopping cart contents, so that they can continue shopping where they left off during a previous visit.

3.Cookies can store a wide variety of information, such as user IDs, timestamps, and browsing history. When a website uses a cookie, the cookie is sent from the web server to the user's browser, which stores the cookie on the user's computer. The next time the user visits the website, their browser sends the cookie back to the web server, allowing the website to access the stored information.

4.While cookies are a useful tool for many websites, they can also be used for tracking and advertising purposes, which has led to concerns about user privacy. Many web browsers allow users to disable or restrict cookies, or to clear their cookies and browsing history to protect their privacy

5.কুকিজ হল একটি ছোট টেক্সট ফাইল যা ওয়েব সার্ভার দ্বারা তৈরি এবং ব্যবহারকারীর ওয়েব ব্রাউজার দ্বারা স্টোর করা হয়। কুকিজ সাধারণত ওয়েবসাইট ব্যবহারকারীদের ট্র্যাক করতে এবং তাদের সংজ্ঞায়িত করতে ব্যবহৃত হয়।

6.কুকিজ সাধারণত বহুল ব্যবহৃত হয় ওয়েবসাইট ব্যবহারকারীদের পছন্দ, লগইন স্ট্যাটাস এবং ব্রাউজিং হিস্ট্রি সম্পর্কে তথ্য সংরক্ষণ করতে। কুকিজ সাধারণত ব্যবহারকারীকে একই ওয়েবসাইটে পুনরায় প্রবেশ করলে তাদের অভিজ্ঞতা ব্যক্তিগত করে এবং তাদের পছন্দ মুলতুবি সংরক্ষিত থাকে।

7.কুকিজ বিভিন্ন ধরণের তথ্য সংরক্ষণ করতে পারে, যেমন ব্যবহারকারী আইডি, টাইমস্ট্যাম্প এবং ব্রাউজিং হিস্ট্রি। যখন একটি ওয়েবসাইট কুকি ব্যবহার কর

 </details>
 <details>
<summary> parts of cookie
? (Click Me) </summary>
<br>
1.A cookie typically consists of four parts:

2.Name: The name of the cookie.
3.Value: The value associated with the cookie.
4.Expiration Date/Time: The date and time when the cookie should expire and be deleted.
5.Path and Domain: The domain and path for which the cookie is valid.
6.The "name" and "value" are the only required parts of a cookie. The "expiration date/time" and "path/domain" are optional.
7.The "name" is a string that identifies the cookie, and the "value" is the data associated with the cookie. Both the name and value can be up to 4KB in size.

8.The "expiration date/time" specifies when the cookie should expire. Once the expiration time has passed, the cookie will be deleted by the browser.

9.The "path" and "domain" specify the domain and path for which the cookie is valid. If no domain is specified, the cookie is valid for the domain that set the cookie. If no path is specified, the cookie is valid for the entire domain.

কুকির পার্টস হলঃ

10.নাম (Name): এটি কুকির নাম নির্দেশ করে। এটি কুকি সেট করার সময় ব্যবহৃত হয়।

11.মান (Value): এটি কুকির মান নির্দেশ করে। এটি কুকি সেট করার সময় ব্যবহৃত হয়।

12.এক্সপায়ার টাইম (Expires Time): এটি নির্দেশ করে কুকি কতক্ষন পরে মেয়াদ উত্তীর্ণ হবে। এটি কুকি সেট করার সময় ব্যবহৃত হয়।

13.ডোমেইন (Domain): এটি নির্দেশ করে কুকি যে ডোমেন এপ্লাই হবে। এটি কুকি সেট করার সময় ব্যবহৃত হয়।

14.পাথ (Path): এটি নির্দেশ করে কুকি কোন পাথ এপ্লাই হবে। এটি কুকি সেট করার সময় ব্যবহৃত হয়।

15.সিকিউর (Secure): এটি নির্দেশ করে কুকি কেবল সিকিউর কানেকশনসহ পাঠানো হবে কিনা।

 </details>
 <details>
<summary> What is loacal storage
? (Click Me) </summary>
<br>
1.লোকাল স্টোরেজ (Local Storage) হল ওয়েব ব্রাউজারের একটি ফিচার যা ব্যবহারকারীর ডেটা স্থায়ীভাবে সেভ করে রাখে। এটি একটি ব্রাউজার স্টোরেজ ইঞ্জিন যা ক্লায়েন্ট সাইড স্টোরেজ সেট করে।

2.লোকাল স্টোরেজ একটি জাভাস্ক্রিপ্ট API এবং এটি ওয়েব স্টোরেজ এপিআইর একটি অংশ। এটি সিধান্তগুলি ব্যবহার করে ব্রাউজারের মধ্যে স্থায়ী ডেটা সেভ করতে পারে। এটি সংগ্রহকারী আকারে ব্যবহার করা যেতে পারে যা সেশন কুকির সাথে তুলনায় অনেকটা মিল করে, কিন্তু সেশন কুকির থেকে কোনও উদ্দেশ্যে ব্যবহার করা যায় না।

3.লোকাল স্টোরেজ এর সুবিধা হল এটি স্থায়ীভাবে ডেটা সেভ করে রাখতে পারে যা সেশন শেষ হওয়ার পরে ওয়েবসাইট বা এপ্লিকেশনে সেট করা ডেটার উপর নির্ভর করে না। এছাড়াও লোকাল স্টোরেজ ডে

 </details>
