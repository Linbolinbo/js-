import thenfs from 'then-fs'
async function get(){
    let r1=await thenfs.readFile('./flies/1.txt','utf-8')
    console.log(r1);
    let r2=await thenfs.readFile('./flies/2.txt','utf-8')
    console.log(r2);
    let r3=await thenfs.readFile('./flies/3.txt','utf-8')
    console.log(r3);
}
get()


