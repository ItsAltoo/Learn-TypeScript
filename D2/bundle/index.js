"use strict";
let name = 'astro';
// mengapa folder d1 dan d2 berhubungan? karena d1 dan d2 berada di dalam folder src yang sama sehingga berhubungan satu sama lain dan dapat saling berinteraksi 
// jadi bagaimana agar kita bisa menggunakan variable name yang ada di folder d2 dengan mengabaikan folder d1? kita bisa menggunakan path aliasing pada tsconfig.json 
// apa saja yang harus diubah pada tsconfig.json? pada tsconfig.json kita harus menambahkan path aliasing pada compilerOptions contoh: "@d2/*": ["src/d2/*"]
console.log({ name });
//# sourceMappingURL=index.js.map