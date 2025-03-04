# Advanced Node.js Concepts 🚀

## Description

This project explores advanced Node.js concepts, including Buffers, the Event Loop, and Streams. It provides practical examples and demonstrations of these core features, helping you understand how to build efficient and robust Node.js applications.

## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd advanced-nodejs
    ```

2.  **Install dependencies:**

    Navigate to each module (`buffers`, `event-loop`, `streams`) and run:

    ```bash
    cd buffers
    npm install
    cd ../event-loop
    npm install
    cd ../streams
    npm install
    cd ..
    ```

3.  **Run the examples:**

    To run the examples in each module, use the following commands:

    ```bash
    cd buffers
    npm run dev
    cd ../event-loop
    npm run dev
    cd ../streams
    npm run dev
    cd ..
    ```

## Usage

### Buffers

The `buffers` module demonstrates how to create, manipulate, and use Buffers in Node.js. Buffers are essential for handling binary data, such as file system operations, cryptography, and image processing.

```typescript
import { Buffer } from 'node:buffer';

// Creating a buffer
const buffer = Buffer.alloc(10);
console.log(buffer); // Output: <Buffer 00 00 00 00 00 00 00 00 00 00>

// Writing to a buffer
buffer.write("Hello");
console.log(buffer.toString()); // Output: Hello
```

### Event Loop

The `event-loop` module illustrates how the Node.js event loop handles asynchronous tasks. It explains the differences between microtasks and macrotasks and demonstrates the execution order of various asynchronous operations.

```typescript
console.log("1. Script has started");

setTimeout(() => {
  console.log("2. setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise resolved");
});

console.log("4. Script has ended");
```

### Streams

The `streams` module provides a practical example of using streams to read, compress, encrypt, and write data efficiently. It includes a custom `EncryptStream` class that transforms data while streaming.

```typescript
import fs from "fs";
import crypto from "crypto";
import zlib from "zlib";
import { Transform } from "stream";

// Create a readable stream
const readableStream = fs.createReadStream("./test_files/file.txt");

// Create a gzip stream
const gzipStream = zlib.createGzip();

// Create a writeable stream
const writeableStream = fs.createWriteStream("./test_files/output.txt.gzip");

// Pipe the streams
readableStream.pipe(gzipStream).pipe(writeableStream);
```

## Features

*   **Buffers**: Demonstrates the creation, manipulation, and usage of Buffers for handling binary data.
*   **Event Loop**: Explains the event loop phases and the execution order of asynchronous tasks.
*   **Streams**: Implements readable, writable, duplex, and transform streams for efficient data processing.
*   **Encryption**: Shows how to encrypt data using streams and the `crypto` module.
*   **Compression**: Demonstrates data compression using streams and the `zlib` module.

## Technologies Used

| Technology   | Description                                                              |
| :----------- | :----------------------------------------------------------------------- |
| Node.js      | JavaScript runtime environment                                           |
| TypeScript   | A typed superset of JavaScript that compiles to plain JavaScript.       |
| npm          | Package manager for JavaScript                                           |
| `fs` module  | File system module for reading and writing files.                      |
| `crypto`     | Cryptography module for encryption and decryption operations.            |
| `zlib`       | Compression and decompression module                                    |
| `stream`     | Module for working with streaming data.                                |
| nodemon      | Automatically restarts the node application when file changes are detected. |

## Contributing

Contributions are welcome! Here’s how you can contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

[![Built with Dokugen](https://img.shields.io/badge/Built%20with-Dokugen-brightgreen)](https://github.com/samueltuoyo15/Dokugen)
