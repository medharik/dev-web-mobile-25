// suppression des doublons dans un tableau
// exemple : [1,3,1,2,4,3,2] => [1,3,2,4]

const a=[1,3,1,2,4,3,2];
const unique=[];
function rendre_unique(tab=[]) {
    const unique=[];
    for(let i=0;i<a.length;i++){
        if(!exist(a[i],unique)){
        unique.push(a[i]);
        }
    }
    // github.com/medharik/dev-web-mobile-25
    return unique;
}

//  la frequence de chaque nombre dans un  tableau 
// [1,2,1,3] => 1 : 2 , 2:1 , 3 :1 
let nf=1;
const ta=[1,2,1,3];
function freq(n, tab){
    let frequence=0;
    for (let i = 0; i < tab.length; i++) {
       if (tab[i]==n) {
        frequence++;
       }
        
    }
    return frequence;
}
const tx=[1,1,3,1,3,2];
// [1,1,3,1,3,2] => 1 est repete 3 , 2 est repete : 1,....
const uni=rendre_unique(tx);
for (let i = 0; i < uni.length; i++) {
    console.log(uni[i]+" est repete : "+freq(uni[i],tx));
    
}

console.log('unique ',rendre_unique(a));

//rappel sur les fonctions : sous - programme realisant une tache (fonction role) precise

// exemple : creer une fonction qui recoit deux nombre retourne leur somme 
// definition (creation) de la fonction a deux parametre a et b
function ajouter(a,b) {
    const somme =a+b;
    return somme;
}

//appel de la fonction : call
let s=ajouter(1,2);
console.log('la somme est ',s);
console.log('la somme est ',ajouter(12,8));

// definir une fonction : exist qui recoit deux parametres : un nombre et un tableau , retourne 

//true si ce nombre se trouve dans tableau , false sinon 
function exist(n,tab){
  for (let i = 0; i < tab.length; i++) 
    if (tab[i]===n)    return true;
return false;

}
console.log(exist(10,[2,4,1,6]));
//2eme methode
const ensemble=new Set(a);
const u=[...ensemble];
console.log('ensemble',u);
