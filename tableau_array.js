// tableau : ensemble de donnees (de meme type pour les langages typés)
const  a =[9,3,7,5];//tableau INDEXE (numerote de zero ),sa longueur (a.length)=4,
//la premiere donnee est a[0] ( cad : 9), la derniere est a[3] (cad : 5) 
// ou bien d'une maniere generale  a[4-1] (a[a.lentgh -1 ])
//a est reelement une adresse (reference ou pointeur vers le tableau)

a[0]=9;
// a=33;// erreur car a est une adresse  constante
console.log(a);
//parcourir un tableau :
for (let i = 0; i < a.length; i++) {
    // const element = array[i];
    console.log(a[i]);
    
}
for (const key  in a) {
      console.log(key,a[key]);
}