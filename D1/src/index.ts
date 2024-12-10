let myName: string = "Malik";
let myAge: number = 18;
let bool: boolean = false;

// initialisasi awal kosong nilainya
let namaSaya: string[];

// isi data namaSaya
namaSaya = ["Malik", "akbar"];

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
