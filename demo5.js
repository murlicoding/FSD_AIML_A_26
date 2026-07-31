export const sum=(...num)=>{
    const s=num.reduce((s, i) => s + i, 0);
return s;
}
export const add=(...num)=>{
let s=0;
for(let i of sum){
    s=s+i;
}
return s;
}
//export default s