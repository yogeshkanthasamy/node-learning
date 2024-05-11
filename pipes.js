const fs=require('node:fs')
const zlip=require('node:zlib')
const zip=zlip.createGzip()

const readablestream=fs.createReadStream('./file.txt',{
  encoding:'utf-8',
  highWaterMark:2
})
 

































