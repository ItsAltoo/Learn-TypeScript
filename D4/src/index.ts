const welcome = (name: string) => {
  return `Welcome ${name}`;
};
{
  let name: string = "Malik";
  console.log({ name });
}

console.log(welcome("Malik"));

interface Person {
  name: string;
  id: number;
}

let Yui : Person
Yui = {name:"Yui",id:20}

console.log(Yui);
