// 1. Extraire les mots contenant une lettre spécifique
// Écrivez une fonction qui prend une phrase et retourne tous les mots contenant la lettre  e 
// exemple : "je prefere la derniere version de javascript"=>["je","prefere","derniere","version","de"]

// const phrase="je prefere la derniere version de javascript";
// split=> ["je","prefere","la","derniere","version","de","javascript"] 
// const tab=phrase.split(" ");
// filter=>["je","prefere","derniere","version","de"]
// const tabFiltre=tab.filter(mot=> mot.includes("e"));

const motAvecLettre=(phrase,lettre)=>{
    const tab=phrase.split(" ");
    const tabFiltre=tab.filter(mot=> mot.includes(lettre));
    return tabFiltre;
}

function nombreMotDepassantUneLongueur(mots,longueurMin) {
return mots.filter(word=> word.length>=longueurMin).length;

}

//ex4 
// trouver el premier mot qui commence par une lettre
// exemple ["dell","hp","toshiba","telstar"]=> le premier mot qui commence par t est "toshiba"
function firstWordStartLettre(mots,lettre){
return mots.find(e=> e.toLowerCase(). startsWith(lettre.toLowerCase()));
}
//ex5 : "i like js"=>["i","like","js"]=> [1,4,2]=> somme/nombre 
const moyenne="i like js".split(" ").map( e=>e.length).reduce((somme,c)=>somme+c,0)/"i like js".split(" ").length;
console.log(moyenne.toFixed(2));
//ex6 :
// "i like javascript , javascript is the best programming language "=>i like js , js is the best programming language
const ph="i like javascript , javascript is the best programming language ";
console.log(ph.split(" ").map(e=> e==="javascript"? "js":e).join(" "));
console.log('mot qui commence par t',firstWordStartLettre(["dell","hp","toshiba","telstar"],'T'))
console.log(nombreMotDepassantUneLongueur(["dell","hp","toshiba"],5))
// le nombre de mots depassant 3 en longueur =["dell","toshiba"]=> 2

console.log(motAvecLettre("je prefere la derniere version de javascript","j"));
// const ali={prenom:'hicham',age:20};
// const age=20;
// const alaa={...ali};//clone
// ali.prenom="samir";
// console.log(ali===alaa);

const n=[3,0,5,1];
n.sort((a,b)=>b-a);
const etudiants=[
    {nom:"hicham",age:20},
    {nom:"ali",age:18},
    {nom:"samir",age:25}
];
const te=etudiants.map(e=>e.nom);

const trieParLongueur=(mots)=>{
return mots.sort((a,b)=>(a.length-b.length )*-1);
}
 console.log(te);
module.exports={motAvecLettre,trieParLongueur};
