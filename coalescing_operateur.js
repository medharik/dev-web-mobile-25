//nullish coalesing 
let age=10;
let age2;//undefined
age=19;// null donnee directement par le developpeur
let age3=null;
let x = age2 ?? age3 ?? age;//?? pour null et undefined
console.log(x); // affiche 10
const hp={libelle: 'hp',prix:5000,qteStock:10};
const dell={libelle: 'hp',prix:5000};

dell.qteStock=(dell.qteStock ?? 0) +1 ;
// avec 
let p;
 let prix = p || 20;//  p est true,false, falsy (equivalent de false : 0,[],null,undefined,"",false), ou truthy 


 //







 