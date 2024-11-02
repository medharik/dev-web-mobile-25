// rappel des boucles : bnloc de code repetifs
// boucle for : souvent utilisee pour un nombre d'iteration connu a l'avance
let trouve=false;
for (let  i = 0; i<50  && !trouve ; i++) {
if(++i%5==0)     trouve =true;

 console.log('i trouve',i);
}

for (let i = 0; i < 6; i++) {
 console.log('A',i);
 if(++i%2==0) continue;
 console.log('B',i);
 if(i++%4==0) break;
 console.log('C',i);
    
}

//i =1 ;i=3,i=5
// 1,j=4 / i=1,j=2/i=2 , j=0
// badr, amira : i=0  
//Ibrahim : i=1 a 4 
// console.log('i : ',i,j);

//boucle while (do while) : ..... pour un nombre de repetition variable