// sort => le tri 
// [2,1,5]=> [1,2,5]
let prix=[2,21,130,1];
let s=prix.sort((a,b)=> a-b);// sort  destructive => modifie la variable
console.log(prix,s);
let prenoms=["ali",'ka','alaa','zineb'];
// let s2=prenoms.sort((a,b)=> a.localeCompare(b));
prenoms.sort((a,b)=> a.length-b.length);
console.log(prenoms);
let etudiant=[{nom:'alami',age:20},{nom: 'lahrouchi',age:30},{nom: 'koita',age:24}];
etudiant.sort((a,b)=> a.nom.localeCompare(b.nom));
etudiant.sort((a,b)=> b.age - a.age);
console.log(etudiant)