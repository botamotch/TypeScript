// $ deno run --allow-net main.ts
// 200
// text/html; charset=utf-8

let resp = await fetch("https://twitter.com/home");

console.log(resp.status);
console.log(resp.headers.get("Content-Type"));
// console.log(await resp.text());
