"use strict";
let myName = "Malik";
let myAge = 18;
let bool = false;
// initialisasi awal kosong nilainya
let namaSaya;
// isi data namaSaya
namaSaya = ["Malik", "akbar"];
// tuple array
let dataMahasiswa;
dataMahasiswa = [1250, "mancap", false];
let friends;
// TIPE DATA CUSTOM
friends = {
    nama: "Node",
    Absen: true,
    class: "A",
    nim: 1230,
};
console.log({ myName });
console.log({ myAge });
console.log({ bool });
console.log({ namaSaya });
console.log({ dataMahasiswa });
console.log({ friends });
// function
function create() {
    return 12 + 2;
}
// arrow function
const math = () => {
    return 20 - 2;
};
const sayHello = (nama) => {
    console.log(`Hello ${nama}`);
};
console.log(create());
console.log(math());
sayHello("wanjay");
console.log("====================================");
// Function
function add(a, b) {
    return a + b;
}
// Arrow Function
const multiply = (a, b) => {
    return a * b;
};
console.log(add(10, 20), multiply(10, 20));
console.log(typeof add, typeof multiply);
console.log("====================================");
// Array
let arr;
arr = ["1", "2", "3", "4", "5"];
console.log(arr);
console.log(typeof arr);
// mengapa hasilnya object? karena array di javascript adalah object
// untuk mengecek tipe data array bisa menggunakan Array.isArray(arr)
console.log("====================================");
// Object
let obj;
obj = { nama: "Malik", age: 18 };
console.log(obj);
console.log(typeof obj);
console.log("====================================");
let person;
person = { nama: "Malik", age: 18, nim: 1230 };
console.log(person);
console.log(typeof person);
// interface bisa dijadikan sebagai tipe data custom yang bisa digunakan untuk menentukan tipe data dari sebuah variabel atau parameter.
// perbedaan interface dengan type adalah interface hanya bisa digunakan untuk object sedangkan type bisa digunakan untuk object, array, function, dll.
console.log("====================================");
// Union
let phone;
phone = 628123456789;
console.log(phone);
phone = "08123456789";
console.log(phone);
console.log(typeof phone);
// Union adalah tipe data yang bisa memiliki lebih dari satu tipe data.
// apakah bisa menggunakan union pada array? bisa, tapi tidak disarankan karena akan membuat kode menjadi ambigu.
// jadi sebaiknya gunakan union pada tipe data yang sederhana seperti number, string, boolean, dll.
console.log("====================================");
let phoneNumber;
phoneNumber = 628123456789;
console.log(phoneNumber);
phoneNumber = "08123456789";
console.log(phoneNumber);
console.log(typeof phoneNumber);
let user;
user = { nama: "Malik", age: 18, nim: 1230 };
console.log(user);
console.log(typeof user);
console.log("====================================");
let users;
users = ["Malik", "Akbar"];
console.log(users);
console.log(typeof users);
console.log("====================================");
let ade;
ade = (a, b) => a + b;
console.log(ade(10, 20));
console.log(typeof ade);
// Type Alias pada function bisa digunakan untuk menentukan tipe data dari parameter dan return value dari function.
//apakah bisa memanggil tanpa let ade: Add; ? bisa, tapi tidak disarankan karena akan membuat kode menjadi ambigu.
// jadi sebaiknya gunakan let ade: Add; untuk mempermudah pembacaan kode.
// contohnya seperti ini
let ad = (a, b) => a + b;
console.log(ad(10, 20));
console.log(typeof ad);
// mengapa harus menggunakan let ad: Add; ? karena dengan menggunakan let ad: Add; kita bisa mengetahui bahwa ad adalah variabel yang bertipe data Add.
// apa yang terjadi jika let di ganti type? akan error karena type tidak dikenali oleh typescript.
// apakah bisa langsung memanggil type add tanpa let? bisa, tapi tidak disarankan karena akan membuat kode menjadi ambigu.
// contohnya seperti ini
// (a, b) => a + b;
// console.log(add(10, 20));  
console.log("====================================");
