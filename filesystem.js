const fs=require('node:fs')
const read=fs.readFileSync('./file.txt','utf-8')
console.log(read);

fs.writeFileSync('./file.txt',"yogeshyogi")


fs.writeFile('./file.txt',"yogeshyogi",{flag:'a'},(err)=>{
     if(err){
        console.log(err);
     }else{
        console.log("flie written successfully");
        
     }

})
     

