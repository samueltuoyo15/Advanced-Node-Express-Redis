/*
Buffers are objects that basically helps u handle and work with raw  binary data
## SOME USE CASE
- file system operations 
- cryptography 
- image processing 
*/

// some examples of creating buffers 
const buffOne = Buffer.alloc(15) // this creates a buffer the argument inside the alloc method represent the size of the buffer in bytes 
console.log("buffer:", buffOne)

const string = "Hello Sam"
const bufferFromString = Buffer.from(string) // this creates a buffer from a string of Hello Sam
console.log("buffered string:", bufferFromString)

const arr = [1,2,3,4,5,0]
const bufferFromArrOfIntergers = Buffer.from(arr) // this creates a buffer from am array of integers of Hello Sam
console.log("buffered array of integers:", (bufferFromArrOfIntergers))

// some examples of writing to buffers
buffOne.write("Hey Fams")
console.log("Writing a string to the buffOne variable:", buffOne.toString())

// some cool stuff u can also do 
console.log("Get first byte of the string buffer", bufferFromString[0])
console.log("Slice and take only some bytes", bufferFromString.slice(0, 3))