# TypeScript

[ ] [deno / tsserver の競合回避](https://zenn.dev/kawarimidoll/articles/2b57745045b225)

### [HTTP Requests - Deno by example](https://examples.deno.land/http-requests)

```typescript
let resp = await fetch("https://example.com");

console.log(resp.status); // 200
console.log(resp.headers.get("Content-Type")); // "text/html"
console.log(await resp.text()); // "Hello, World!"
```

```sh
$ deno run --allow-net main.ts
200
text/html; charset=utf-8
```

ちょっと工夫しようとすると複雑になるので[sindresorhus/ky](https://github.com/sindresorhus/ky)というのを使うのがいいらしい。
