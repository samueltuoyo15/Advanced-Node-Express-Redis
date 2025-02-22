# Advanced Node.js Concepts

This project explores advanced Node.js concepts, including Buffers, the Event Loop, Streams, and Express.js fundamentals. Each concept is implemented in a separate module to provide a clear and focused understanding.

## Installation

To get started, clone the repository and install the necessary dependencies for each module.

```bash
git clone <repository-url>
cd <project-directory>
cd buffers
npm install
cd ../event-loop
npm install
cd ../streams
npm install
cd ../express-concepts
npm install
cd ..
```

## Usage

Each module can be run independently using `ts-node` or by compiling the TypeScript code to JavaScript and running with Node.js.

### Buffers

Buffers are used to handle raw binary data.

```bash
cd buffers
npm run dev # or node index.js after compiling
```

This will execute the `index.ts` file, demonstrating buffer creation, writing, and manipulation.

### Event Loop

Understanding the event loop is crucial for writing efficient asynchronous code.

```bash
cd event-loop
npm run dev # or node index.js after compiling
```

This will show the execution order of tasks in the event loop, including microtasks and macrotasks.

### Streams

Streams allow for efficient reading and writing of data in chunks.

```bash
cd streams
npm run dev # or node index.js after compiling
```

This will demonstrate reading a file, compressing it with Gzip, encrypting it, and writing the output to another file.

### Express Concepts

This module covers the basics of building web applications with Express.js.

```bash
cd express-concepts
npm run dev # or node index.js after compiling
```

**NOTE:** the express-concepts project does not have any logic, it needs to be implemented for it to actually run.

## Contribution

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Implement your changes.
4.  Submit a pull request.

Please ensure your code follows the existing style and includes appropriate tests.

[![Built with Dokugen](https://img.shields.io/badge/Built%20with-Dokugen-brightgreen)](https://github.com/samueltuoyo15/Dokugen)

## License

This project is under the ISC License.
