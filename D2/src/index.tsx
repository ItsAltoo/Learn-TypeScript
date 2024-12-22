// variable
const a = 1;
// function
function b() {
  return a;
}   
// class
class C {
  constructor() {
    console.log(a);
  }
}
// export
export { a, b, C };
// bagaimana cara mengakses variable, function, class yang ada di file index.tsx?
// import { a, b, C } from './index.tsx';
console.log(a); // 1
// bagaimana cara menampilkan hasil di typescript react?

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { a, b, C } from './index.tsx';
// import tersebut di letak