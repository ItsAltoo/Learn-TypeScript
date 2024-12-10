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
friends = {
    name: "Node",
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
const sayHello = (name) => {
    console.log(`Hello ${name}`);
};
console.log(create());
console.log(math());
sayHello("wanjay");
