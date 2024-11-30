//destructuration d'objets 
//a - pour les tableaux 
ages =[10,20,80,30,40];
// recuperation de chaque valeur du tableau dans des variables
// let a=ages[0];
// let b=ages[1];
//...
// avec desctructuration d'objets
let [a,b,c,d,e]=ages;
let [nom1,prenom1='john',age1,genre='homme']=["alami","mohamed",30];
//nom="othmani";// erreur car nom est const
console.log(nom1,prenom1,age1,genre);
let x;//x undefined
// let y=null;
//permutation de variable



let v=10,w=20;
//exemple : permutation de variable
[v,w]=[w,v];
console.log(v,w);
//b- les objets
const o={nom: 'Doe',prenom: 'john',age: 30};//age est la proriete et sa valeur = 30
//rappel : 
//a- acces a des proprietes
let ag=o.age;
//ou 
ag=o['age'];
const info='age';
console.log(o['age'],o.age,o.info,o[info],info);
// comment modifier
o.age=40;
//comment ajouter 
o.adresse='rue de la paix';
//supprimer
delete o.adresse;
console.log(o);
//b- destructuration des objets 
const ali={nom: 'Doe',prenom: 'ali',age: 30};
const {nom: nom,age:age,prenom: prenom}={nom: 'Doe',prenom: 'john',age: 30};
console.log(nom,age,prenom);
//
const twinAli={...ali,prenom:'alaa'};
console.log(twinAli);
const {nom: nomt,age: aget}=twinAli;
//coalescence nulle (nulish coalising ) 