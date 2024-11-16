// passage par valeur 
let x=9;//x=9
let y=x;// passage par valeur(copie)
y=5;
console.log('x',x,'y',y);//x=9,y=5
//passage par reference (adresse, pointeur)
let a=[1,2,3];
let b=a;// passage par reference
b[0]=19;
console.log('a[0]',a[0],'b[0]',b[0]);//19,19
//creer une copie (clone)
let c=[...a];//les ... sont le spread
c[0]=25;
console.log('a[0]',a[0],'c[0]',c[0]);//19,25
console.log('a',a)

