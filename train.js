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



//Define

function raqamlar(a) {
    let raqam = 0;
    for(let i = 0; i < a.length; i++) {
        const c = a[i];
        if(c >= '0' && c<= '9') {
            raqam++;
        }
    }
    return raqam;
}

console.log(raqamlar("sdg3435jy23"));
