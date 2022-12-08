import readfs from 'then-fs'
readfs.readFile('./flies/1.txt','utf-8').catch((err)=>{
    console.log(err.message);
}).then((r1)=>{
    console.log(r1);
    return readfs.readFile('./flies/2.txt','utf-8')
}).then((r2)=>{
    console.log(r2);
    return readfs.readFile('./flies/3.txt','utf-8')
}).then((r3)=>{
    console.log(r3);
})