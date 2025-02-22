/*
Buffers are objects that basically helps u handle and work with raw  binary data
## SOME USE CASE
- file system operations 
- cryptography 
- image processing 
*/

// some examples of creating buffers 
const buffOne = Buffer.alloc(15) // this creates a buffer the argument inside the alloc method represent the size of the buffer in bytes 
//NB: Buffer are fixed sized once created u cant resize them

console.log("buffer:", buffOne)

const string = "Hello Sam"
const bufferFromString = Buffer.from(string) // this creates a buffer from a string of Hello Sam
console.log("buffered string:", bufferFromString)

const arr = [1,2,3,4,5,0]
const bufferFromArrOfIntergers = Buffer.from(arr) // this creates a buffer from an array of integers of Hello Sam
console.log("buffered array of integers:", (bufferFromArrOfIntergers))

// some examples of writing to buffers
buffOne.write("Hey Fams")

/*NB: Buffer are fixed sized once created u cant resize them
 Because buff one size is 15 the string "Hey Fams" fit's in well but if the size is greater than the size of the argument it wont work it will only add 
the amount of the firsts argument that fits in*/
console.log("Writing a string to the buffOne variable:", buffOne.toString())

// u can specify encoding type as a second argument 
const hexBuff = Buffer.from("Hello", "utf-8") // supports base64 e.t.c
console.log("utf8 encoding of a string", hexBuff.toString("hex")) // Converts to hex toString

// u can copy contents of a buffer to another
const buffA = Buffer.from("Hello")
const buffB = Buffer.alloc(buffA.length)
buffA.copy(buffB)
console.log(buffB.toString()) // "Hello"


// some cool stuff u can also do 
console.log("Get first byte of the string buffer", bufferFromString[0])
console.log("Slice and take only some bytes", bufferFromString.slice(0, 3))

// concat buffers 
const concatBuff = Buffer.concat([buffOne, bufferFromString])
console.log(concatBuff)

// convert to JSON
console.log("JSON presentation of the concated buffers", concatBuff.toJSON())