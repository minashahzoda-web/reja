// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "ozingizga ishlashni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling foydasi yoq endi" // 60
// ];


// //callback
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a < 20 && a <= 30) callback(null, list[1]);
//     else if(a < 30 && a <= 40) callback(null, list[2]);
//     else if(a < 40 && a <= 50) callback(null, list[3]);
//     else if(a < 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//            callback(null, list[5]); 
//         }, 5000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(45, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     console.log('javob', data);
// });


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "ozingizga ishlashni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling foydasi yoq endi", // 60
// ];

// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//     //    return list[5];
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(list[5]);
//         }, 5000);
//     });
//     }
// }

// //then/catch
// console.log("passed here 0");
// maslahatBering(25)
// .then(data => {
//     console.log('javob:', data);
// }).catch(err => {
//     console.log('ERROR:', err)
// });
// console.log('passed here 1');


// //async/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(75);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();


// let newArray = 0;
// function countLetter(letter, word) {
//     newArray = word.split("").filter(element => element.toLowerCase() === letter.toLowerCase());

//     if(newArray.length == 0) {
//         console.log("Topilmadi");
//     }
         
//         return {
//             newArray
//         };
// }
// countLetter("i", "MIT")
// console.log(`Harflar: ${newArray}, soni ${newArray.length}`);


// // DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng emas!", null);
//   } else {
//     const c = a % b;
//     callback(null, c);
//   }
// }

// // CALL
// qoldiqliBolish(7, 5, (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     console.log("data:", data);
//     console.log("MANTIQLAR...");
//   }
// });


// function raqamlar(a) {
//     let raqam = 0;
//     for(let i = 0; i < a.length; i++) {
//         const c = a[i];
//         if(c >= '0' && c<= '9') {
//             raqam++;
//         }
//     }
//     return raqam;
// }

// console.log(raqamlar("sdg3435jy23"));

// //TASK C

// const moment = require("moment");
// const time = moment().format('HH:mm');
// console.log(time);


// class Shop {
//     constructor(nonNumber, lagmonNumber, colaNumber) {
//         this.nonNumber = nonNumber;
//         this.lagmonNumber = lagmonNumber;
//         this.colaNumber = colaNumber;
//     }

//     qoldiq() {
//         console.log(`Hozir ${time} da ${this.nonNumber} ta non, ${this.lagmonNumber} ta lagmon, ${this.colaNumber} ta cola mavjud`);
//     }

//     sotish(number1, number2, number3) {
//         if(number1 > 0 && number1 <= this.nonNumber && number2 > 0 && number2 <= this.lagmonNumber && number3 > 0 && number3 <= this.colaNumber) {
//             this.nonNumber -= number1;
//             this.lagmonNumber -= number2;
//             this.colaNumber -= number3; 
//             console.log( `Hozir ${time} da ${this.nonNumber} ta non, ${this.lagmonNumber} ta lagmon, ${this.colaNumber} ta cola mavjud`);
//         } else {
//             console.log("Mahsulot siz kiritgan miqdordan kam");
//         }
//     }

//     qabul(number1, number2, number3) {
//         if(number1 > 0 && number2 > 0 && number3 > 0 ) {
//             this.nonNumber += number1;
//             this.lagmonNumber += number2;
//             this.colaNumber += number3; 
//             console.log( `Hozir ${time} da ${this.nonNumber} ta non, ${this.lagmonNumber} ta lagmon, ${this.colaNumber} ta cola mavjud`);
//         } else {
//             console.log("Barcha mahsulot miqdorini musbat holda kiriting");
//         }
//     }

// }

// const shop = new Shop(5,6,7);
// shop.sotish(1,1,3);
// shop.qabul(5,6,3)

// MITASK D

function checkContent(word1, word2) {
    let w1 = [...word1];
    let w2 = [...word2];
    let result = w1.every(letter => {
        w2.includes(letter)
    });
    return result;
}

console.log(checkContent("madina", "madina"));
