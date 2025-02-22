/*
// ====== //
1. Node js runs asynchronous tasks or operations in two categories 

a. Micro Task
- has the higher priority 
includes:
- process.nextTick()
- Promise.then() e.t.c

b. Macro Task
- has the lower priority 
includes:
- setInterval()
- setTimeout() e.t.c
- setImmediate()
- I/O callback (meaning input and output operations) e.g fs.readFile()

// ====== //
2. I/O (Input/Output) Operations
## I/O tasks involve external resources like:

-File system (fs.readFile) e.t.c

NB: These don’t block the main thread. Instead, Node.js delegates them to libuv’s worker pool and calls the callback when ready.

// ===== //
3. Node.js Event Loop Execution Order

## The event loop has different phases:
👇👇👇👇
timers => pending callbacks => idle, prepare => poll => check => close callbacks

*/

import fs from "fs"
import crypto from "crypto"
import { fileURLToPath } from 'url'
import { dirname } from 'path'

console.log("1. Script has started")

setTimeout(() => {
  console.log("2. 0seconds callback (macrotask)")
}, 0)

setTimeout(() => {
  console.log("3. 0seconds callback (macrotask)")
}, 0)


setImmediate(() => {
  console.log("4. setImmediate callback (check)")
})

Promise.resolve().then(() => {
  console.log("5. Promise Resolved (microtask)")
})

process.nextTick(() => {
  console.log("6. process.nextTick callback (microtask)")
})

 const __filename = fileURLToPath(import.meta.url)
 const __dirname = dirname(__filename)

 fs.readFile(__filename, () => {
   console.log("7. Read file operation (I/O) callback")
})

// => Asynchronous password based key derivation function 
crypto.pbkdf2("secret", "salt", 50000, 64, "sha512", (err, key) => {
  if(err) throw err
  console.log("8. crypto pbkdf2 operation complete d (CPU INTENSIVE TASK)")
})

console.log("9. Script has ended")

/*
// ====== //
1. Node js runs asynchronous tasks or operations in two categories 

a. Micro Task
- has the higher priority 
includes:
- process.nextTick()
- Promise.then() e.t.c

b. Macro Task
- has the lower priority 
includes:
- setInterval()
- setTimeout() e.t.c
- setImmediate()
- I/O callback (meaning input and output operations) e.g fs.readFile()

// ====== //
2. I/O (Input/Output) Operations
## I/O tasks involve external resources like:

-File system (fs.readFile) e.t.c

NB: These don’t block the main thread. Instead, Node.js delegates them to libuv’s worker pool and calls the callback when ready.

// ===== //
3. Node.js Event Loop Execution Order

## The event loop has different phases:
👇👇👇👇
timers => pending callbacks => idle, prepare => poll => check => close callbacks

*/