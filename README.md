Undefined:
যখন কোনো ভ্যারিয়েবল তৈরি (declare) করা হয় কিন্তু তার মধ্যে কোনো মান (value) দেওয়া হয় না, তখন তার মান স্বয়ংক্রিয়ভাবে undefined হয়। অর্থাৎ, ভ্যারিয়েবল আছে কিন্তু এখনো কোনো value assign করা হয়নি।

Null:
null ব্যবহার করা হয় যখন ইচ্ছাকৃতভাবে কোনো ভ্যারিয়েবলকে খালি বা মানহীন রাখা হয়। অর্থাৎ, ডেভেলপার নিজে থেকে বোঝাতে চান যে এখানে কোনো মান নেই।

<!-- 2 -->

map():
map() হলো একটি array method
যেটা array এর প্রতিটি element এর উপর কাজ করে এবং নতুন একটা array return করে।

forEach():
forEach() ও array এর প্রতিটি element এর উপর কাজ করে কিন্তু এটা কোনো নতুন array return করে না।

<!-- 3 -->

== :
শুধু value compare করে।

=== :
value + type দুইটাই compare করে।

<!-- 4 -->

async/await অ্যাসিঙ্ক্রোনাস API কল করে, পরিচালনা করা এবং ত্রুটিগুলি পরিচালনা করা সহজ করে তোলে, যার ফলে আমরা একটি সিঙ্ক্রোনাস স্টাইলে অ্যাসিঙ্ক্রোনাস কোড লিখতে পারি।

<!-- 5 -->

Global scope এ declare করা variable সব scope (function বা block) এর ভিতর থেকে access করা যায়।
কিন্তু function বা block scope এর ভিতরে declare করা variable বাইরে (global scope এ) access করা যায় না।
