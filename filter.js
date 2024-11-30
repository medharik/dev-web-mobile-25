const t = [-10, 1, -2, 3, 4, -5, 6];
const n = t.filter((x) =>  x > 0); //immuable
const p = t.filter((e) => e > 0 && e % 2 == 0);
const x = t.filter((e, i) => i != 0 && e % 2 == 0);
const y = t.filter((e, i, ar) => i != 0 && e % 2 == 0 && ar[i] !== 4);
const u = t.filter((e, i, ar) => {
    ar[0] = 100;
    
  
  return  e>0;
});


console.log(t,n, p, x, y,u);
//named function 
function somme(a,b){

    return a+b;
}
// call 
let s=somme(1,2);
console.log('somme de 1 et 2',s);

// closure , ou function lambda 
const somme2=function(a,b){
    return a+b;
}
console.log('somme2 de 1 et 2',somme2(10,20));
//arrow function
const somme3=(a,b) => { 
    return a+b;
}
const somme4=(a,b) =>   a+b;

console.log('somme3 de 1 et 2',somme3(5,10));