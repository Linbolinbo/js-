import thenfs from 'then-fs'
const proStr=[
    thenfs.readFile('./flies/1.txt','utf8'),
    thenfs.readFile('./flies/2.txt','utf8'),
    thenfs.readFile('./flies/3.txt','utf8'),

]
Promise.all(proStr).then((r1,r2,r3)=>{
    console.log(r1,r2,r3);
}).catch((err)=>{
    console.log(err.message);
})