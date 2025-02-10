let myName: string = "Malik";
let myAge: number = 18;
let bool: boolean = false;

// initialisasi awal kosong nilainya
let nameSaya: string[];

// isi data nameSaya
nameSaya = ["Malik", "akbar"];

// tuple array
let dataMahasiswa: [number, string, boolean];
dataMahasiswa = [1250, "mancap", false];

// Type data custom
type Friend = {
  name: string;
  class: string;
  nim?: number; // <- tanda `?` pada key itu memiliki arti "Opsional"
  Absen: boolean;
};

let friends: Friend;

// TIPE DATA CUSTOM
friends = {
  name: "Node",
  Absen: true,
  class: "A",
  nim: 1230,
};

console.log({ myName });
console.log({ myAge });
console.log({ bool });
console.log({ nameSaya });
console.log({ dataMahasiswa });
console.log({ friends });

// function
function create(): number {
  return 12 + 2;
}

// arrow function
const math = (): number => {
  return 20 - 2;
};

const sayHello = (name: string) => {
  console.log(`Hello ${name}`);
};


console.log(create());
console.log(math());
sayHello("wanjay");

console.log("====================================");

// Function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow Function
const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log(add(10, 20),multiply(10, 20));
console.log(typeof add,typeof multiply);

console.log("====================================");
// Array
let arr: string[];
arr = ["1", "2", "3", "4", "5"];
console.log(arr);
console.log(typeof arr);
// mengapa hasilnya object? karena array di javascript adalah object
// untuk mengecek tipe data array bisa menggunakan Array.isArray(arr)
console.log("====================================");


// Object
let obj: { name: string; age: number };
obj = { name: "Malik", age: 18 };
console.log(obj);
console.log(typeof obj);

console.log("====================================");

// Interface
interface Person {
  name: string;
  age: number;
  nim: number;
}
let person: Person;
person = { name: "Malik", age: 18,nim: 1230 };
console.log(person);
console.log(typeof person);
// interface bisa dijadikan sebagai tipe data custom yang bisa digunakan untuk menentukan tipe data dari sebuah variabel atau parameter.
// perbedaan interface dengan type adalah interface hanya bisa digunakan untuk object sedangkan type bisa digunakan untuk object, array, function, dll.
console.log("====================================");

// Union
let phone: number | string;
phone = 628123456789;
console.log(phone);
phone = "08123456789";
console.log(phone);
console.log(typeof phone);
// Union adalah tipe data yang bisa memiliki lebih dari satu tipe data.
// apakah bisa menggunakan union pada array? bisa, tapi tidak disarankan karena akan membuat kode menjadi ambigu.
// jadi sebaiknya gunakan union pada tipe data yang sederhana seperti number, string, boolean, dll.
console.log("====================================");

// Type Alias
type Phone = number | string;
let phoneNumber: Phone;
phoneNumber = 628123456789;
console.log(phoneNumber);
phoneNumber = "08123456789";
console.log(phoneNumber);
console.log(typeof phoneNumber);
// Type Alias adalah tipe data custom yang bisa digunakan untuk menentukan tipe data dari sebuah variabel atau parameter.
// Type Alias bisa digunakan untuk object, array, function, dll.
// contoh penggunaan Type Alias pada object
type User = {
  name: string;
  age: number;
  nim: number;
};
let user: User;
user = { name: "Malik", age: 18, nim: 1230 };
console.log(user);
console.log(typeof user);
console.log("====================================");
// contoh penggunaan Type Alias pada array
type Users = string[];
let users: Users;
users = ["Malik", "Akbar"];
console.log(users);
console.log(typeof users);
console.log("====================================");
// contoh penggunaan Type Alias pada function
type Add = (a: number, b: number) => number;
let ade: Add;
ade = (a, b) => a + b;
console.log(ade(10, 20));
console.log(typeof ade);
// Type Alias pada function bisa digunakan untuk menentukan tipe data dari parameter dan return value dari function.
//apakah bisa memanggil tanpa let ade: Add; ? bisa, tapi tidak disarankan karena akan membuat kode menjadi ambigu.
// jadi sebaiknya gunakan let ade: Add; untuk mempermudah pembacaan kode.
// contohnya seperti ini
let ad: Add = (a, b) => a + b;
console.log(ad(10, 20));
console.log(typeof ad);
// mengapa harus menggunakan let ad: Add; ? karena dengan menggunakan let ad: Add; kita bisa mengetahui bahwa ad adalah variabel yang bertipe data Add.
// apa yang terjadi jika let di ganti type? akan error karena type tidak dikenali oleh typescript.
// apakah bisa langsung memanggil type add tanpa let? bisa, tapi tidak disarankan karena akan membuat kode menjadi ambigu.
// contohnya seperti ini
// (a, b) => a + b;
// console.log(add(10, 20));  
console.log("====================================");
