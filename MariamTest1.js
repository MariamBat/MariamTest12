let number1 = 87;
let number2 = 65;
console.log(number1+number2);

let student = {
firstname : "მარიამ",
lastname : "ბაჭაძე",
age : 29,
Email : "mariambachadze@gmail.com",
marks : [5,4,3,2,1,]


} ;
console.log(student.firstname);

//გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, 
// //დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n.

let m =45;
let n = 23;
if (m>n) {
    console.log (m+n)
} 
else {
    console.log (n)
}

//გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. 
// დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” ( მაგ თუ სახელი არის Irakli  
// უნდა დაიბეჭდოს Rise and shine, Irakli ! )

let studentName = "Mariam";
console.log("Rise and shine," + studentName + "!");

//გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი 
// რიცხვითი მნიშვნელობა, დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი 
// არის 0, თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. დაბეჭდეთ 
// ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ 
// დაბეჭდოთ bonus)

let salary = 3000
let bonus = null;
if (salary >= 2000) {
    bonus=0;
}

else {bonus=salary*0.1;
} console.log(bonus);

//გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. 
// დაბეჭდეთ c.
let a=23;
let b=a/2;
let c=a+b;
console.log(c);

//გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და 
//დაბეჭდეთ.

let phone = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
console.log(phone);
console.log(phone[0]);
console.log(phone[4]);


//დაბეჭდეთ phones მასივის ბოლო პირველი და ბოლო ელემენტი 
// ( ცალ-ცალკე console.log ეგში)


