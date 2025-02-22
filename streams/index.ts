/*
##  Streams in Node.js

Streams allow us to **read** and **write** data efficiently by processing it in chunks instead of loading everything into memory at once.

###  Types of Streams:
1. **Readable Streams** - Streams that allow reading data (e.g., `fs.createReadStream`).
2. **Writable Streams** - Streams that allow writing data (e.g., `fs.createWriteStream`).
3. **Duplex Streams** - Streams that support both reading and writing (e.g., TCP sockets).
4. **Transform Streams** - A special type of Duplex stream that **modifies** data while streaming (e.g., compression with Zlib).

---

## Practical Implementation: 
This example:
- Reads a file (`Readable Stream`).
- Compresses the file using **Gzip** (`Transform Stream`).
- Encrypts the compressed data using **AES-256-CBC** (`Transform Stream`).
- Writes the final encrypted output to a file (`Writable Stream`).
*/


import fs from "fs"
import crypto from "crypto"
import zlib from "zlib" //inbuilt nodejs module that enables compression 
import { Transform } from "stream" // stream module now we are using the Transform 

class EncryptStream extends Transform{
  constructor(key, vector){
    super()
    this.key = key
    this.vector = vector
  }
  
  _transform(chunk, encoding, callback){
  const cipher = crypto.createCipheriv("aes-256-cbc", this.key, this.vector)
  const encrypted = Buffer.concat([cipher.update(chunk), cipher.final()])
  this.push(encrypted)
  callback()
  }
}


// IMPLEMENTING THE READABLE stream
const readableStream = fs.createReadStream("./test_files/file.txt")

// NEW GZIP OBJECT TO COMPRESS THE STREAM OF THE DATA
const gzipStream = zlib.createGzip()


const key = crypto.randomBytes(32)
const vector = crypto.randomBytes(16)
const encryptStream = new EncryptStream(key, vector)

// Read => Compress => Encrypt => write 
const writeableStream = fs.createWriteStream("./test_files/output.txt.gzip.enc")
readableStream.pipe(gzipStream).pipe(encryptStream).pipe(writeableStream)

console.log("Streaming => Compressing => Writing");