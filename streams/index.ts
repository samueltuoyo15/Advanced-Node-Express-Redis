/*
Streams help us read and write data from Source or to a destination 

TYPES OF STREAMS 
1. Readable Streams - Read Steams 
2. Writable Streams - write Streams 
3. Duplex Streams - Both Read and Write e.g (TPC socket)
4. Transform - Zlib streams

*/

//PRACTICAL IMPLEMENTATION

import fs from "fs"
import crypto from "crypto"
import zlib from "zlip" //inbuilt nodejs module that enables compression 
import { Transform } from "stream" // stream module now we are using the Transform 

class EncryptStream extends Transform
